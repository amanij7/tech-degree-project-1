
let quotes = [
    {
        quote: 'To laugh ar yourself is to love yourself.',
        author: '- Mickey Mouse'
    },
    {
        quote: 'You know you\'re in love when you can\'t fall asleep because realisy is finally better than your dreams .',
        author: '- Dr. Seuss'
    },
    {
        quote: 'I don\'t have to worry about who doesn\'t like me... I\'m too busy loving the people who love me.',
        author: '- Snoopy'
    },
    {
        quote: 'In the book of life, the answers aren\'t in the back.',
        author: '- Charlie Brown'
    },
    {
        quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        author: '- Dr. Seuss'
    },
    {
        quote: 'Sometimes we have to go deep inside ourselves to solve our problems.',
        author: '- Patrick Star from Spongebob Squarepants'
    },
    {
        quote: 'The flower that blooms in adversity is the rarest and beautiful of all.',
        author: '- The Emperor from Mulan'
    },
    {
        quote: 'Just keep swimming.', 
        author: '- Dory'
    },
    {
        quote: 'Oh yes, the past can hurt. But, you can either run from it or learn from it.',
        author: '- Rafiki'
    },
    {
        quote: 'Life is hard, Tommy. Sometimes I think it\'s the hardest thing there is.',
        author: '- Chuckie from Rugrats'
    },
    {
        quote: 'I\'m headed home to have myself a juice, snuggle with my blankie, and go nap nap.',
        author: '- Tommy from Rugrats'
    }
    

];



//select random quote
function getRandomQuote(quote) {
    return Math.floor(Math.random() * quotes.length) +1;
};
console.log(quotes);


//Print quote to UI
function printQuote(message) {

};

