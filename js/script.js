// Quotes array
const quotes = [
  ['All we have to decide is what to do with the time that is given us', 'Gandalf The Grey', 'Lord of the Rings', 1954],
  ['Talk is cheap, show me the code.', 'Linus Torvalds', 'Programing Wisdom on Twitter', 2009],
  ['Do or do not. There is no try.', 'Yoda', 'Starwars: a New  Hope', 1978 ],
  ['Do I Look Civilized To You?', 'John Wick', 'John Wick', 2014],
  ['To infinity and beyond', 'Buzz Lightyear', 'Toystory', 1995]
]

// Generates a random quote number and rounds it
function getRandomQuote() {
  return Math.floor(Math.random() * quotes.length);
}

// Prints quote to the sceen
function printQuote() {
  random = getRandomQuote();
  document.getElementById('quote').innerHTML = `${quotes[random][0]}`;
  document.getElementById('source').innerHTML = `${quotes[random][1]}<span class="citation" id="citition" >${quotes[random][2]}</span><span class="year" id = "year">${quotes[random][3]}</span>`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);