// Dependencies
const express = require(`express`);

//CONFIGURATIONS
const app = express()
const PORT = 3003

//ROUTES
app.get(`/`, (request, response) => {
    response.send(`Hello, world`)
})

 app.get("/tim-gunn", (req, res) => {
   res.send("Make it work");
 });

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    res.send("Hasta la vista, baby")
 })
//the first message "I'll be back" the terminal crash because you can not send two headers/resposes at rthe same time.
 

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
  "Very doubtful",
];

    let maigic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    res.send(`<h1>${maigic8Answer}<h1`);
})

// ROUTES
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})
// ROUTES
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})

// ROUTES
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
}) 

// ROUTES
app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
})





// EXPORT
module.exports = app