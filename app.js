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

app.listen(3000)