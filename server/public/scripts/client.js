


console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');

    $('#addJokeButton').on('click', addNewJoke);
    getJokes();
}

function addNewJoke() {
    const whoseJoke = $('#whoseJokeIn').val();
    const jokeQuestion = $('#jokeQuestionIn').val();
    const punchLine = $('#punchLineIn').val();

    const jokeObject = {
        whoseJoke,
        jokeQuestion,
        punchLine,
    };
    clearInputs();
    postJokes(jokeObject);

}
function clearInputs() {
    $('#whoseJokeIn').val(null);
    $('#jokeQuestionIn').val('');
    $('#punchLineIn').val('');

}

function getJokes() {
    $.ajax({
        type: 'GET',
        url: '/jokes'

    }).then(function (response) {
        render(response);
    });
}

// param { object } newJoke
// @param { string } newJoke.whoseJoke
// @param { string } newJoke.jokeQuestion
// @param { string } newJoke.punchLine

function postJokes(newJoke) {
    $.ajax({
        type: 'POST',
        url: '/jokes',
        data: newJoke
    }).then((response) => {
        getJokes();
    });
}
// @param { array } jokeArray


function render(jokeArray) {
    $('#outputDiv').empty();
    for (let joke of jokeArray) {
        $('#outputDiv').append(`
       
                
            <div>
                <p>${joke.whoseJoke}</p>
                <p>${joke.jokeQuestion}</p>
                <p><i> - ${joke.punchLine}</i></p>
                <hr />
            </div>
    `);
    }
}





