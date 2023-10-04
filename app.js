const getRandomAnswer = require( "./magic8Response");
const express = require("express") 
const app = express(); 

app.listen(3000)

app.get( "/", (req, res) => {
    res.send("Hello World")
});

app.get("/terminator", (req, res) => {
    res.send("I'll be Back")
});

app.get("/tim-gunn", (req, res) => {
    res.send("Make it Work")
});

app.get("/rupaul", (req, res) => {
    res.send("Sasshay--you stay")
    res.send("You betta Work!") // each request can only have 1 response so it never gets to this!
});

app.get("/emeril", (req, res) => {
    res.send("Bam!!!!")
});

app.get("/borg", (req, res) => {
    res.send("Resistance is Futile")
});

app.get("/zeus", (req, res) => {
    res.send("Who's Unicorn is This!?")
});

app.get("/toto", (req, res) => {
    res.send("Gimme my shoes Back!!")
});

app.get("/gollum", (req, res) => {
    res.send("My Precious!")
});

app.get("/magic8", (req, res) => {
    const randomAnswer = getRandomAnswer()
    res.render(`<h1>${randomAnswer}</h1>`)
});
