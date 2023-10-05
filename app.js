const express = require("express")

const app = express()


//HELLO WORLD

app.get('/', (req,res) => {
    res.status(418).send("Hewwo, Worwd! owo")
})

//CHARACTERS AND CATCHPHRASES

app.get('/terminator', (req, res) =>{
    res.send("I'll be back!")
})

app.get('/terminator2', (req, res)=>{
    res.send('Hasta la vista, baby')
})

app.get('/emeril', (req, res) =>{
    res.send("Bam!")
})

app.get('/gollum', (req, res) =>{
    res.send("My precious...")
})

app.get('/foxmulder', (req, res) =>{
    res.send("The truth is out there.")
})

app.get('/frankenstein', (req, res) =>{
    res.send("It's alive! It's alive!!")
})

app.get('/regis', (req, res) =>{
    res.send("Is that your final answer?")
})

app.get('/dorothy', (req, res) =>{
    res.send("Toto, I've got a feeling we're not in Kansas anymore.")
})

app.get('/borg', (req, res) =>{
    res.send("Resistance is futile.")
})

app.get('/phantom', (req, res) =>{
    res.send("Sing my angel of music, sing!!")
})

app.get('/brucebanner', (req, res) =>{
    res.send("Don't make me angry.")
})

app.get('/jimlovell', (req, res) =>{
    res.send("Houston, we have a problem")
})


// MAGIC 8 BALL

app.get('/magic8', (req,res) => {
    const magic8Responses = [
        "It is certain!",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - Definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes, and signs point to yes.",
        "Reply hazy, try again...",
        "Ask again later...",
        "Better not tell you now...",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful." 
      ]    
    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
    res.send(`<h1>${magic8Answer}</h1>`)
})


// EXPORT

module.exports = app
