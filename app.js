const express = require("express");
const app = express();
const port = 3000;

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
  "Very doubtful",
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/steve-Mary", (req, res) => {
  res.send("Here's looking at you, kid");
});

app.get("/Coach-Taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/JJEvans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/HarryCallahan", (req, res) => {
  res.send("Go ahead, make my day");
});

app.get("/Rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/James-Bond", (req, res) => {
  res.send("the name is Bond, James Bond");
});

app.get("/Dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get("/magic8", (req, res) => {
  res.send(
    `<h1>${
      magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    }</h1>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
