const express = require("express");
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

function randomEight() {
    const randomNumber = Math.floor(Math.random() * magic8Responses.length);
    const randomPhase = magic8Responses[randomNumber];
    return randomPhase;
}


app.get("/", (req, res) => {
    res.send(" Whats the catch phrase ?");
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back!");
});

app.get("/homer-simpson", (req, res) => {
    res.send("D'oh!")
});

app.get("/Emeril", (req, res) => {
    res.send("Bam!");
});
app.get("/Coach-Taylor", (req, res) => {
    res.send("Here's Looking at you, kid.")
});

app.get("/Steven-McGarrett", (req, res) => {
    res.send("Book 'em Danno!");
});

app.get("/JJ-Evens", (req, res) => {
    res.send("Dy-no-myte!")
});

app.get("/Batman", (req, res) => {
    res.send("To the Batmobile!");
});

app.get("/Frasier", (dsreq, res) => {
    res.send("I'm Listening!");
});

app.get("/Regis", (req, res) => {
    res.send(" Is that you final answer?");
});

app.get("/magic8", (req, res) => {
    const phrase = randomEight()
    res.send(phrase);
})


app.listen(3003, () => {
    console.log("Listening for all Catchphrase Express requests.");
});