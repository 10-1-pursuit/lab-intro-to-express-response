const express = require('express');

const app = express();
const port = 3003;


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

app.get('/tonymontana', (request,response) => {
    response.send("say hello to my little friend!")
})

app.get('/ashketchum', (request,response) => {
    response.send(`Pikachu, I choose you !`)
})

app.get('/paulwalker', (request,response) => {
    response.send('If one day the speed kills me, do not cry because I was smiling!')
})

app.get('/samboahen', (request,response) => {
    response.send('and we are live!')
})

app.get('/terminator', (request,response) => {
    response.send('hasta la vista baby!')
})

app.get('/homersimpson', (request,response) => {
    response.send('doh!')
})

app.get('/batman', (request,response) => {
    response.send('to the batmobile!')
})

app.get('/brucebanner', (request,response) => {
    response.send('dont make me angry!')
})

app.get('/rocky', (request,response) => {
    response.send('yo Adrian!')
})

app.get('/magic8', (request,response) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);

    const randomResponse = magic8Responses[randomIndex];
    
    response.send(randomResponse);
});









app.listen(port, () => {
    console.log(`listening on port ${port}`)
});