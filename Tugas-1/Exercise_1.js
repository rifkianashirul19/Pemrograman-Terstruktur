let randomQuote;

const quotes = [
    "The best way to predict the future is to create it.",
    "Be the change you wish to see in the world.",
    "Innovation distinguishes between a leader and a follower.",
    "Believe you can and you're halfway there.",
    "Your time is limited, don't waste it living someone else's life."];

randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(randomQuote);