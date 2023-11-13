
//Dependencies 
const express =require('express')
//Config
const app =express()
const PORT = 3003
//Routes
app.get('/', (request, response) =>{
    response.send('HEY EXPRESS')
})

app.listen(PORT, () =>{
    console.log(`listening to ${PORT}`)
})

app.get('/terminator', (req,res) => {
    res.send('ill be back')
})
app.get('/terminator2', (req,res) => {
    res.send('hasta la vista, baby')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Emeril', (req, res) => {
    res.send('Bam!')
  })

  app.get('/Steve McGarrett ', (req, res) => {
    res.send('Book em Danno!')
  })

  app.get('/JJ Evans', (req, res) => {
    res.send('Dy-no-myte!')
  })
 
  app.get('/Rocky', (req, res) => {
    res.send('Yo, Adrian')
  })
 
  app.get('/Frankenstein', (req, res) => {
    res.send('Its alive! Its alive')
  })
 
  app.get('/Fraiser', (req, res) => {
    res.send('Im listening')
  })
 
  app.get('/Gollum', (req, res) => {
    res.send('my precious ')
  })

  app.get('/magic8', (req,res) =>{

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

  const ranPhrase = Math.floor(Math.random() * magic8Responses.length);

  const magic8Response = magic8Responses[ranPhrase];
  res.send(`<h1>${magic8Response}</h1>`);
  })
 
 
 
 