const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Wassup World!")
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    // res.send('Hasta la vista, baby')
});

app.get("/tim-gunn", (req, res) => {
    res.send("Make it work")
});

app.get("/captain-america", (req, res) => {
    res.send("Avengers Assemble!")
});

app.get("/star-wars", (req, res) => {
    res.send("May The Force Be With You")
});

app.get("/spongebob", (req, res) => {
    res.send("I'm Ready!")
});

app.get("/charlie-brown", (req, res) => {
    res.send("Good Grief")
});

app.get("/magic8", (req, res) => {
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
    const randomResponses = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    console.log(randomResponses)
    res.send(`<h1>${randomResponses}</h1>`)
});

app.listen(3003, () => {
    console.log("I'm listening")
});