// app.js
const express = require("express");
// console.log(express);
const app = express();

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
  
  ]

// app.get("/", (req, res) => {
//     res.send("Hello, Express")
// });

app.get('/Terminator', (req, res) => {
    res.send("I'll be back ,  Hasta la vista, baby")
    // res.send("Hasta la vista, baby")
});

app.get('/Rocky', (req, res) => {
    res.send("Yo, Adrian")
});

app.get('/Zeus', (req, res) => {
    res.send("Release the Kraken")
});

app.get('/Raven', (req, res) => {
    res.send("Yup, that's me!")
});

app.get('/Tony Montana ', (req, res) => {
    res.send("Say hello to my little friend")
});

app.get('/Dorothy', (req, res) => {
    res.send("Toto, I've got a feeling we're not in Kansas anymore")
});

app.get('/Rod Tidwell', (req, res) => {
    res.send("Show me the money!")
});

app.get('/Gollum', (req, res) => {
    res.send("My precious")
});

app.get('/James Bond', (req, res) => {
    res.send("the name is Bond, James Bond")
});

app.get("/Frankenstein", (req, res) => {
    res.send("It's alive! It's alive")
});

app.get("/magic8", (req,res)=> {
    res.send(`<h1>${magic8Answer}</h1>`)})
app.listen(3003, () => {
    console.log("Listening for requests on port 3003");
});