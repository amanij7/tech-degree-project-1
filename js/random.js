


//select random quote
function getRandomQuote(arr) {
    var randomQuote = Math.floor(Math.random() * arr.length);
        var results = arr[randomQuote];
        return results;
};



// Display quote to UI
function print(message) {
    document.write(message);
};

function printQuote(res) {
   var html = `<p class="quote>${getRandomQuote.quote}</p>"`;
   html += `<p class="source>${getRandomQuote.source}</p>"`;

   print(html);
};
console.log(printQuote(quotes));







document.getElementById('load-quote').addEventListener("click", printQuote, false);



