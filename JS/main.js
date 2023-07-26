// Array of quotes
var quotes = [
  {
    author: "--Oscar Wilde",
    text: "Be yourself; everyone else is already taken.",
  },
  {
    author: "--Marilyn Monroe",
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "--Albert Einstein",
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  },
  {
    author: "--Frank Zappa",
    text: "So many books, so little time.",
  },
];

var previousIndex;

function newQuote() {
  do {
    // generate random index
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousIndex);

  // get item from array by index
  var selectedQuote = quotes[randomIndex];

  // print quote in HTML
  document.getElementById("quote").innerHTML = selectedQuote.text;
  document.getElementById("author").innerHTML = selectedQuote.author;

  // Set previous index to be the current random index
  previousIndex = randomIndex;
}
