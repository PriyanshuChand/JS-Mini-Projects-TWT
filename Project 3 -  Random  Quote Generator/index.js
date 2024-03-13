const quotes = [ "Stay hungry, stay foolish.",
"Knowledge is power.", 
"To be, or not to be, that is the question.",
"The only way to do great work is to love what you do.",
"I think, therefore I am.",
"Time is money.",
"Life is what happens when you're busy making other plans.",
"What we think, we become.",
"The best way to predict the future is to invent it.",
"Simplicity is the ultimate sophistication."]

const usedIndexes = new Set();
const quoteElement = document.getElementById('quote');

function generateQuote() {

    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while (true) {
        const randomIndex = Math.floor(Math.random()*quotes.length);

        if (usedIndexes.has(randomIndex)) continue

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndex);
        break;
    }
}