// Dependencies
const express = require("express")

// Configuration
const app = express()
const PORT = 3003

// Routes
app.get("/", (request, response) => {
    response.send("What's Poppin Ken?");
  });

app.get("/terminator", (request, response) => {
    response.send("I'll be back");
  });

// Listen
app.listen(PORT, ()=> {
    console.log(`listen on port ${PORT}`)
})