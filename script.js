const btn = document.querySelector('#new-quote')

const quote = document.querySelector('.quote')

const person = document.querySelector('.person')

const quotes = [
    {
        quote: "Life is not about getting and having, it is about giving and being.",person: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        person: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        person: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        person: "Robert Frost"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        person: "Florence Nightingale"
    }
]


btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

})