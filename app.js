const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the specified port or default to 3000

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

// Define a route

app.get('/terminator', (req, res) => {
    res.send("I'll be back");
    res.send('Hasta la vista, baby')
  });

app.get('/Emeril', (req, res) => {
  res.send('Bam!');
});

app.get('/steve-mcgarrett', (req, res) => {
    res.send("Book 'em Danno!");
  });

app.get('/coach-taylor', (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose");
  });

  app.get('/homer-simpson', (req, res) => {
    res.send("D'Oh!");
  });

  app.get('/bruce-banner', (req, res) => {
    res.send("Don't make me angry");
  });

  app.get('/jj-evans', (req, res) => {
    res.send("Dy-no-myte!");
  });

  app.get('/batman', (req, res) => {
    res.send("To the Batmobile!");
  });

  app.get('/hannibal-smith', (req, res) => {
    res.send("I love it when a plan comes together");
  });

  app.get('/magic8', (req, res) => {
    // Generate a random index to select a response from the array
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);

  const randomResponse = magic8Responses[randomIndex];

  const htmlResponse = `<h1>${randomResponse}</h1>`

    res.send(htmlResponse);
  });



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
