/devs

const express = require("express"); 


//config

const app = express()
const PORT = 3000

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

//routes 

app.get('/', (request , response) => {
    response.send('Hello kenia')
})

app.get('/terminator', (request , response) => {
    response.send('ill be back')
    // response.send('Hasta la vista, baby')
})

app.get('/timgunn', (request , response) => {
    response.send('Make it work')
})

app.get('/jjEvans', (request , response) => {
    response.send('Dy-no-myte!')
})

app.get('/Batman ', (request , response) => {
    response.send('To the Batmobile!')
})

app.get('/Tony Montana', (request , response) => {
    response.send('Say hello to my little friend')
})

app.get('/Dorothy', (request , response) => {
    response.send('Toto, Ive got a feeling were not in Kansas anymore')
})

app.get('/Frankenstein', (request , response) => {
    response.send('its alive! Its alive')
})

app.get('/James Bond ', (request , response) => {
    response.send('the name is Bond, James Bond')
})

app.get('/Rod Tidwell', (request , response) => {
    response.send('Show me the money!')
})


app.get('/magic8', (request , response) => {
function randomEight (){
    Math.random(magic8Responses)
}

    response.send(randomEight())
})
//listen

app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`)
})
