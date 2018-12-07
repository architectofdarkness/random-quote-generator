// Create the array of quote objects and name it quotes
let quotes = [
    {
        quote: "Keep your face to the sunshine and you cannot see a shadow.",
        source: "Helen Keller"
    },
    {
        quote: "Limit your \"always\" and your \"nevers.\"",
        source: "Unknown",
        citation: "Googlio"
    },
    {
        quote: "Spread love everywhere you go.",
        source: "Mother Teresa"
    },
    {
        quote: "A champion is defined not by their wins but by how they can recover when they fall.",
        source: "Serena Williams"
    },
    {
        quote: "Each person must live their life as a model for others.",
        source: "Rosa Parks​"
    },{
        quote: "Motivation comes from working on things we care about.",
        source: "Sheryl Sandberg"
    }
];

// Create the getRandomQuote function to get and return a quote.

let getRandomQuote = (no) => {
    return quotes[no];
};

// Create the printQuote funtion and name it printQuote

const printQuote = () => {
    let randomNumber = Math.floor(Math.random()*quotes.length);
    let quoteDisplay = document.querySelector('#quote-box');
    let newQuote = getRandomQuote(randomNumber);
    
    quoteDisplay.innerHTML = "";
    quoteDisplay.innerHTML = `<p class="quote"> ${newQuote.quote} </p>`;
    
    if (newQuote.source) {
        quoteDisplay.innerHTML += `<p class="source"> ${newQuote.source}`;
    } if (newQuote.citation) {
        quoteDisplay.innerHTML += `<span class="citation"> ${newQuote.citation} </span>`;
    } if (newQuote.year) {
        quoteDisplay.innerHTML += `<span class="year"> ${newQuote.year} </span>`;
    }
    quote.innerHTML += `</p>`;
}

// This event listener will respond to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);