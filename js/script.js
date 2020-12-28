/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote:"You will face many defeats in life, but never let yourself be defeated ",
    source:"Maya Angelou",
    citation:"",
    tags: "#Inspirational",
    date:undefined
  },

  {
    quote:"Intellectual growth should commence at birth and cease only at death",
    source:"Albert Einstein ",
    citation:"",
    tags: "#Lifelong-learning",
    date:undefined
  },

  {
    quote: " Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source:"Mahatma Gandhi",
    citation: "",
    tag: "#Inspirational",
    date:undefined
  },

  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "A Testament of Hope: The Essential Writings and Speeches",
    tag: "#Inspirational",
    date: undefined
  },

  {
    quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    source: "Maurice Switzer",
    citation:"Mrs. Goose, Her Book",
    tag: "#Wisdom",
    date: undefined
  },

  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    source: "Oscar Wilde",
    citation: "Lady Windermere's Fan",
    tag: "#Inspirational",
    date: undefined
  },

  {
    quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    source: "Douglas Adams",
    citation: "The Long Dark Tea-Time of the Soul",
    tag: "#Inspirational",
    date: undefined
  },

  {
    quote: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    source: "Groucho Marx",
    citation: "The Essential Groucho: Writings For By And About Groucho Marx.",
    tag: "#Books",
    date: undefined
  },

  {
    quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    source: "Albert Einstein",
    citation: "What Life Means to Einstein ",
    tag: "#Lifelong-learning",
    date: 1924
  },

  {
    quote: "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
    source: "George R.R. Martin",
    citation: "A Dance with Dragons",
    tags: "#reading-books",
    date: 2011
  },

  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    source: "Dr. Seuss",
    citation:"Oh, the Places You'll Go!",
    tag: "#Inspirational",
    date: undefined
  },

  {
    quote: "I love deadlines. I love the whooshing noise they make as they go by.",
    source: "Douglas Adams,",
    citation:"The Salmon of Doubt",
    tag: "#Inspirational",
    date: undefined
  }
  
];




/***
 * `getRandomQuote` function
 * uses randm number generator to chose a quote from the array using the index.
***/

function getRandomQuote(arr){

  let chosen = Math.floor(Math.random() * (arr.length));
  let chosenQuote = quotes[chosen];
  return chosenQuote;

} 





/***
 * `printQuote` function
 * generates the HTML to print the quote to the browser. the html generated is determined by if the year or citation is provided
***/

function printQuote()
{
  let quote= getRandomQuote(quotes);
  document.querySelector(".quote").innerHTML = `${quote.quote}`;
  if(quote.date != undefined && quote.citation != ""){
    document.querySelector('.source').innerHTML = `${quote.source} <span class="citation">${quote.citation}</span><span class="year">${quote.date}</span><span class="tag">${quote.tag}</span>`
  }
  else if(quote.date != undefined && quote.citation === ""){
    document.querySelector('.source').innerHTML = `${quote.source}<span class="year">${quote.date}</span><span class="tag">${quote.tag}</span>`
  }

  else if(quote.date === undefined && quote.citation !== ""){
    document.querySelector('.source').innerHTML = `${quote.source}<span class="tag">${quote.tag}</span>`
  }

  getRandomColor();
}


window.setInterval(printQuote, 20000);


// generates a random RGB value to change backgroound color for each quote 

function getRandomColor(){
  let r =  Math.floor(Math.random() * (255) +1);
  let g =  Math.floor(Math.random() * (255) +1);
  let b =  Math.floor(Math.random() * (255) +1);
  document.getElementById("container").style.backgroundColor=`rgb(${r}, ${g}, ${b})`;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);



