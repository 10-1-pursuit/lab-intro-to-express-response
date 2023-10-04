const express = require('express');

const app = express();
const port  = 3003;
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

app.get("/", (req, res) => {
    res.send("Hello, world")
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
   
});

app.get("/Emeril", (req, res) => {
    res.send("Bam!")
});

app.get("/SteveMcGarret", (req, res) => {
    res.send("Book 'em Danno!")
})

app.get("/CoachTaylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't lose")
})

app.get("/Hommer-Simpson", (req, res) => {
    res.send("D'Oh")
})

app.get("/Bruce-Banner", (req, res) => {
    res.send("Don't make me angry")
})

app.get("/JJEvans", (req, res) => {
    res.send("Dy-no-myte!")
})

app.get("/Batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/Hannibal-Smith", (req, res) => {
    res.send("I love it when a plan comes together")
})

app.get("/Fraiser", (req, res) => {
    res.send(" I'm listening");
})

app.get("/magic8", (req, res) => {
    res.send(
        `<h1>${
        magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
        }</h1>`
    );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


