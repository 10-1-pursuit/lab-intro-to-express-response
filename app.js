const express = require("express")
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

  app.get("/", (request, response)=>{
    response.status(418).send("Hello, World!")
  })

  app.get("/Bruce-Banner", (request, response)=>{
    response.send("Don't make me angry")
  })

  app.get("/Zeus", (request, response)=>{
    response.send("Release the Kracken")
  })

  app.get("/Frankenstein", (request, response)=>{
    response.send("It's alive! It's alive")
  })

  app.get("/Velma", (request, response)=>{
    response.send("Jinkies")
  })

  app.get("/JJ-Evans", (request, response)=>{
    response.send("Dy-no-myte!")
  })

  app.get("/Batman", (request, response)=>{
    response.send("To the Batmobile!")
  })

  app.get("/Rocky", (request, response)=>{
    response.send("Yo, Adrian")
  })

  app.get("/Homer-Simpson", (request,response)=>{
    response.send("D'Oh")
  })
  module.exports = app