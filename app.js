const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello, This is a completed Lab!');
});

app.get('/terminator', (req, res) => {
    res.send('I\'ll be back');
});

app.get('/SteveMcgarrett', (req, res) => {
    res.send('Book\'em Danno');
});

app.get('/EthanHunt', (req, res) => {
    res.send('Mission Impossible');
});

app.get('/JamesBond', (req, res) => {
    res.send('The name is Bond, James Bond');
});

app.get('/JasonBourne', (req, res) => {
    res.send('I remember everything');
});

app.get('/JohnWick', (req, res) => {
    res.send('People keep asking if I\'m back and I haven\'t really had an answer, but now, yeah, I\'m thinkin\' I\'m back!');
});

app.get('/FoxMulder', (req, res) => {
    res.send('The truth is out there');
});

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"

];

app.get('/magic8', (req, res) => {
    const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
    res.send(`<h1>${randomResponse}</h1>`);
});


module.exports = app;
