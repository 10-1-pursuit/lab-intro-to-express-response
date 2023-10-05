const express = require("express");
console.log(express);



const app = express()

app.get('/terminator', function (req, res) {
  
    
    res.send('Hasta la vista, baby')
})

app.get('/Emeril', function (req, res) {
    res.send('Run')
  })

  app.get('/SteveMcGarrett', function (req, res) {
    res.send('Book em Danno')
  })

  app.get('/HomerSimpson', function (req, res) {
    res.send('D\Oh')
  })

  app.get('/BruceBanner', function (req, res) {
    res.send(' Don\t make me angry')
  })

  app.get('/JJEvans', function (req, res) {
    res.send('Dy-no-myte!')
  })

  app.get('/Batman', function (req, res) {
    res.send('To the Batmobile!')
  })

  app.get('/HannibalSmith', function (req, res) {
    res.send('I love it when a plan comes together')
  })

  app.get('/Fraiser', function (req, res) {
    res.send('I\m listening')
  })


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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  app.get('/8Ball', function (req, res) {
    res.send(`<h1>${magic8Responses[getRandomInt(19)]}</h1>`)
  })

app.listen(3000)