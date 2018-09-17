// Create the array of quote objects and name it quotes
let quotes = [
    {
        quote: "Keep your face to the sunshine and you cannot see a shadow.",
        source: "Helen Keller"
    },
    {
        quote: "Limit your \"always\" and your \"nevers.\"",
        source: ""
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

// Create the getRandomQuuote function and name it getRandomQuote

let getRandomQuote = (no) => {
    return quotes[no].quote;
};

// Create the printQuote funtion and name it printQuote

const printQuote = () => {
    let randomNumber = Math.floor(Math.random()*quotes.length);
    let quote = document.querySelector('.quote');
    
    quote.textContent = getRandomQuote(randomNumber);
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);