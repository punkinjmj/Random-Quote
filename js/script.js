let quotes = [
  'All we have to decide is what to do with the time that is given us',
  'Talk is cheap, show me the code.',
  'Do or do not. There is no try.',
  'Do I Look Civilized To You?',
  'To infinity and beyond'
]

let source = [
  'Gandalf The Grey',
  'Linus Torvalds',
  'Yoda',
  'John Wick',
  'Buzz Lightyear'
]

function printQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-box').innerHTML = `<div class="quote">${quotes[random]}</div> <div class="source">${source[random]}</div>`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);