// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()
const PORT = 3003



// ROUTES
app.get('/', (req, res) => {
    res.send('Hello my Fellows in Cohort 10.1 and 10.2!!')
})

app.get('/terminator', (req, res) => {
    res.send('I\'ll be back!')
    res.send('Hasta la vista, baby!')
})

app.get('/bruce-willis', (req, res) => {
    res.send('Yippee Ki Yay!')
})

app.get('/homer-simpson', (req, res) => {
    res.send('D\'Oh!')
})

app.get('/borg', (req, res) => {
    res.send('Resistance is futile!')
})

app.get('/dorothy', (req, res) => {
    res.send('Toto, I\'ve got a feeling we\'re not in Kansas anymore!')
})

app.get('/robin-williams', (req, res) => {
    res.send('Good morning, Vietnam!')
})

app.get('/gene-kelly', (req, res) => {
    res.send('I\'m singing in the rain!')
})

app.get('/pharrell-williams', (req, res) => {
    res.send('Because I\'m Happy!')
})

app.get('/gloria-gaynor', (req, res) => {
    res.send('I will survive!')
})

app.get('/magic8', (req, res) => {
    
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
    
      let ranmagic = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    
    res.send(ranmagic)
})



// LISTEN
app.listen(PORT, () => {
    console.log('Listening for requests on port ${PORT}')
})