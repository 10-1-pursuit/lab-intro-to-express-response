const express = require('express');
const app = express()

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

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.get('/fonzie', (req, res) => {
    res.send('Ayyy!')
  })

  app.get('/terminator', (req, res) => {
    res.send("I'll be back")
  })

  app.get('/terminator2', (req, res) => {
    res.send('Hasta la vista, baby')
  })

  app.get('/bart', (req, res) => {
    res.send("¡Ay caramba!")
  })

  app.get('/bart2', (req, res) => {
    res.send("Eat my shorts")
  })

  app.get('/kenny', (req, res) => {
    res.send("Oh my God, they killed Kenny")
  })  

  app.get('/magic8', (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const magic8Answer = magic8Responses[randomIndex];
    res.send(`<h1>${magic8Answer}</h1>`)
  })

module.exports = app