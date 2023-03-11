let book = [

    {
        title: "Joe Biden: American DreamerJoe Biden:  Osnos",
        description: "description10",
        genre: "biography",
        author: "Evan OsnosEvan",
        rating: 7,
        review: "reviewBeautifully written . . . A light, enjoyable read . . . Osnos gives you a taste of what could be to come under a Biden presidency . He has a delightful turn of phrase 10",
        FavQuotes: "FavQuotes10",
        section: '0'

    },
    {
        title: "Dharma: Decoding the Epics for a Meaningful Life",
        description: "desStories can be both entertaining and educative.cription11",
        genre: "history",
        author: "Amish",
        rating: 9,
        review: "I'll be honest - I did enjoy reading the book initially. It seemed like a good mix of storytelling and touching upon the core subject it is based on - Dharma - and its many facets.",
        FavQuotes: "It's better to read 1 book 10 times than reading 10 books at once",
        section: '2'

    },
    {
        title: "The Last Resort",
        description: "When Amelia is invited to an all-expenses-paid retreat on a private island, the mysterious offer is too good to refuse. ",
        genre: "mystery",
        author: "sushi holiday",
        rating: 6,
        review: "A twisty thriller that keeps you guessing until the last page. --Candis",
        FavQuotes: "Oh dear book, how could you do this to me?",
        section: '1'

    },
];
let user = [
    {
        name: "Hitesh",
        toRead: 'Dharma: Decoding the Epics for a Meaningful Life,The Last Resort',
        isRead: 'Joe Biden: American DreamerJoe Biden:  Osnos'
    },
    {
        name: "Dinesh",
        toRead: 'Joe Biden: American DreamerJoe Biden:  Osnos',
        isRead: 'Dharma: Decoding the Epics for a Meaningful Life'
    }
]

module.exports = { book, user };