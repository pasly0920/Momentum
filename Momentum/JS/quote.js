const quotes = [
    {
        quote: "The wisest men follow their own direction.",
        author: "",
    },
    {
        quote: "While there's life, there's hope.",
        author: "kikero",
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint Exupery",
    },
    {
        quote: "Nothing is worth more than this day.",
        author: "Goethe",
    },
    {
        quote: "The only day to do great work is love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "I swear by all the stars above, I have never forgotten you.",
        author: "Sandglass",
    },
    {
        quote: "Little minds have little worries, big minds have no time for worries.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "I don't dream at night, I dream all day. I dream for a living.",
        author: "Steven spielberg",
    },
    {
        quote: "Per Ardua Ad Astra Altiora Petamus Volente Deo, Lucete Stellae.",
        author: "Myosotis",
    },
    {
        quote: "You are the aria itself, shine out!",
        author: "Marigold",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
//math.random이 0에서 1 사이의 실수 반환

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;