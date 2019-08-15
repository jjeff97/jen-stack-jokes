const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

// serve back static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/jokes', (req,res) => {
  res.send(trains); //array
});

app.post('/jokes', (req,res) => {
  const newJoke = req.body;
  joke.push(newJoke);
  res.send('All good');
});

app.get('/first-joke', (req,res) => {
  res.send(jokes[0]); //object
})

app.get('/last-joke', (req,res) => {
  res.send(jokes[jokes.length - 1]); //object
});

app.get('/count', (req,res) => {
  res.send({totalCount: jokes.length});
})

app.get('/random', (req,res) => {
  const ranNumber = randomNumber(0, jokes.length-1);
  const randomJoke = trains[ranNumber];
  res.send(randomJokes);
})

app.listen(PORT, function(){
  console.log('server running on: ', PORT);
}); // end spin up server
