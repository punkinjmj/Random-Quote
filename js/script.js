// Quotes Object
const quotes = [
  { quote:'All we have to decide is what to do with the time that is given us', source: 'Gandalf the Grey', citation: 'Lord of the Rings', year: 1954},
  { quote: 'Talk is cheap, show me the code', source: 'Linus Torvalds', citation: 'Programing Wisdom on Twitter', year: 2009},
  { quote:'Do or do not. There is no try.', source: 'Yoda', citation: 'Star Wars: Empire Strikes Back', year: 1980},
  { quote:'Do I Look Civilized To You?', source: 'John Wick', citation: 'John Wick', year: 2014},
  { quote:'To infinity and beyond', source: 'Buzz Lightyear', citation: 'Toy Story', year: 1995}
]

// Generates a random quote number and rounds it
function getRandomQuote() {
  let random =  Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

// Prints quote to the sceen
function printQuote() {
  let randomQuote = getRandomQuote();
  document.getElementById('quote').innerHTML = `${randomQuote.quote}`;
  document.getElementById('source').innerHTML = `${randomQuote.source}<span class="citation" id="citition" >${randomQuote.citation}</span><span class="year" id = "year">${randomQuote.year}</span>`;
}


/**
 *   ['All we have to decide is what to do with the time that is given us', 'Gandalf The Grey', 'Lord of the Rings', 1954],
  ['Talk is cheap, show me the code.', 'Linus Torvalds', 'Programing Wisdom on Twitter', 2009],
  ['Do or do not. There is no try.', 'Yoda', 'Starwars: a New  Hope', 1978 ],
  ['Do I Look Civilized To You?', 'John Wick', 'John Wick', 2014],
  ['To infinity and beyond', 'Buzz Lightyear', 'Toystory', 1995]
 */


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);