

console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', submitJoke);
    getJokes();
}

function submitJoke(event){
    event.preventDefault();

    const formArray = $(this).serializeArray();

    const dataForServer = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchLineIn').val(),
    }:
    console.log(dataForServer);

    $.ajax({
        type: 'POST',
        url: '/jokes',
        data: dataForServer,
    }).then(function(response) {
        getJokes();
    });
    
}

function getJokes() {
    $.ajax({
        type: 'GET',
        url: '/jokes',
        data: dataForServer,

    }).then(function(response){
        getJokes();
    });
}

function render(response) {
    const listOfJokes = response;
    for(let joke of listOfJokes) {
        $('.outputDiv').append(`
        <div>
            <p>${joke.whoseJoke}</p>
            <p>${joke.jokeQuestion}</p>
            <p>${joke.punchLine}</p>
        </div>
        `)
    }
}