// Dependencies
const express = require("express")

// Configuration
const app = express()

// Routes
app.get("/", (request, response) => {
    response.status(200).send("What's Poppin Ken?");
});

app.get("/terminator", (request, response) => {
    response.status(200).send("I'll be back");
});

app.get('/tim-gunn', (req, res) => {
    res.status(200).send(`<center>
    <h1>Make it work</h1>
  </center>`);
});

app.get('/Emeril', (req, res) => {
    res.status(200).send(`<center><h1>Bam!</h1></center>`);
});

app.get('/Steve%20McGarrett', (req, res) => {
    res.status(200).send(`<center><h1>Book 'em Danno!</h1></center>`);
});

app.get('/Coach-Taylor', (req, res) => {
    res.status(200).send(`<center><h1>Clear eyes, full hearts, can't Lose</h1></center>`);
});

app.get('/Homer-Simpson', (req, res) => {
    res.status(200).send(`<center><h1>D'Oh</h1></center>`);
});

app.get('/Bruce-Banner', (req, res) => {
    res.status(200).send(`<center><h1>Dont't make me angry</h1></center>`);
});

app.get('/JJ-Evans', (req, res) => {
    res.status(200).send(`<center><h1>Dy-no-myte!</h1></center>`);
});

app.get('/Batman', (req, res) => {
    res.status(200).send(`<center><h1>To the Batmobile</h1></center>`);
});

app.get('/Hannibal-Smith', (req, res) => {
    res.status(200).send(`<center><h1>I love it when a plan comes together</h1></center>`);
});

app.get('/Travis-Bickle', (req, res) => {
    res.status(200).send(`<center><h1>You talkin' to me</h1></center>`);
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
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[randomIndex];
    
    res.status(200).send(`<center><h1 style="color: red;">${randomResponse}</h1></center>`);
  });

// Export the app object
module.exports = app;
