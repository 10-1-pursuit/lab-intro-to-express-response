const express = require("express")

const app = express()
const PORT = 3003

app.get('/', (req,res) => {
    res.send("Hewwo Worwd! owo")
})

app.get('/terminator', (req, res) =>{
    res.send("I'll be back!")
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

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}.`)
})