const express = require("express");
const app = express()

app.get("/", (req, res)=>{
    res.send("My first express server!!! Testing 1, 2, 3!!! 🧚🏽‍♀️")
})

app.get("/terminator", (req, res)=>{
    res.send("I'll be back!!!! 🦾")
    // res.send("Hasta la vista, baby!! ✌🏽")  ❌ ERROR ❌ => There is only one response per request allowed per http protocol
})

app.get("/timGunn", (req, res) => {
    res.send("Make it work!!")
})

app.get("/homerSimpson", (req, res) => {
    res.send("D'Oh!! 🍩")
})

app.get("/souljaBoy", (req, res) => {
    res.send("Draaakkkkeeee???!!!!")
})

app.get("/rihanna", (req, res) => {
    res.send("Work, work, work, work, work 🎶")
})

app.get('/tonyMontana', (req, res) => {
    res.send("You don't have the guts to be what you wanna be! You need people like me so you can point your fingers and say. 'That's the bad guy!!!")
})

app.get("/readingRainbow", (req, res) => {
    res.send("IIIII can do anythiinnnggg! Take a look! It's in a book!! Reading rainbooowww!!! 🎶")
})

app.get("/wuTang", (req, res) => {
    res.send("Cash Rules Everything Around Me!! CREAM get da money!!! Dolla dolla bills y'all!!!! 🎶")
})

app.get("/dorothy", (req, res) => {
    res.send("Toto, I've got a feeling we're not in Kansas anymore!! 🌪️")
})

app.get("/frankenstein", (req, res) => {
    res.send("It's alive! It's alive!! 🤖")
})

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
    "Very doubtful"
  
  ]
    res.send(magic8Responses)
})


app.listen(3003, ()=>{
    console.log("I'm always listening for requests on port 3003!")
})