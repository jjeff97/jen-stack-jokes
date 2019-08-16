
const jokes = []; 

console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', submitJoke);
    
}

function submitJoke(){
    render()
    
    

    const newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchLineIn').val(),
    }
    console.log(newJoke) 
    
    jokes.push(newJoke);

    
}

function getJokes() {
    $.ajax({
        type: 'GET',
        url: '/jokes',
        data: newJoke,

    }).then(function(response){
        getJokes();
    });
}

function render(listOfJokes) {
    $('#outputDiv').empty();
    for(let joke of listOfJokes) {
        $('.outputDiv').append(`
        <div>
            <p>${joke.whoseJokeIn}</p>
            <p>${joke.jokeQuestionIn}</p>
            <p>${joke.punchLineIn}</p>
        </div>
        `)
    }
}


function postJokes(){
    $.ajax({
        type: 'POST',
        url: '/jokes',
        data: newJoke,
    }).then((response) => {
        getJokes();
    });
}