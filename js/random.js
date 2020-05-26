
//select random quote
function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
        
        return quotes[randomQuote];
}; 


// Random color generator

function randomColor() {
    var color = Math.floor(Math.random() * colors.length );

    var showColor = document.querySelector('body');
    showColor.style.backgroundColor = colors[color]; 
}



// Display quote and random color to UI

function printQuote() {
   var quoteGenerated = getRandomQuote();
   var displayQuote = document.getElementById("quote-box");

   var html = `<p class="quote">${quoteGenerated.quote}</p> 
               <p class="source">${quoteGenerated.source}`;

   if (quoteGenerated.citation) {
       html += `<span class="citation">${quoteGenerated.citation}</span>`;
   }

   if (quoteGenerated.year) {
       html += `<span class="year">${quoteGenerated.year}</span>`
   }

   html += `</p>`;
   
   
   displayQuote.innerHTML = html;

   randomColor();
   
};



document.getElementById('load-quote').addEventListener("click", printQuote, false);



