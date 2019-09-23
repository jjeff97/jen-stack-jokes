
const jokeObject= {
    whoseJoke:'',
    jokeQuestion:'',
    punchLine: '',
}; 

console.log('client.js sourced');

$( document ).ready( init);

function init() {
    console.log('DOM ready');
    $('.addJokeButton').on('click', submitJoke);
    $('.js-clear').on('click', clickClear);
}

function submitJoke(){
    render()
     const newJoke = {
        whoseJoke: $('.whoseJoke').val(),
        jokeQuestion: $('.jokeQuestion').val(),
        punchLine: $('.punchLine').val(),
    }
    console.log(newJoke());
    
    jokes.push(newJoke);

    
}

function postJokes(){
    $.ajax({
        type: 'POST',
        url: '/jokes',
        data: jokeObject,
    }).then((response) => {
        getJokes();
    });
}

function getJokes() {
    $.ajax({
        type: 'GET',
        url: '/jokes'

    }).then(function(response){
        render(response);
    });
}
function clickClear(event) {
    console.log('Clear');
    $('.whoseJoke').val('');
    $('.jokeQuestion').val('');
    $('.punchLine').val('');

}

function render(response) {
    const Jokes = response;
    $('.outputDiv').empty();
    for(let joke of Jokes) {
        $('.outputDiv').append(`
        <div>
            <p>${joke.whoseJoke}</p>
            <p>${joke.jokeQuestion}</p>
            <p>${joke.punchLine}</p>
        </div>
        `);
    }
}


