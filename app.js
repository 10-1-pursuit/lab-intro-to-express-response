// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 3003;

// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome to My Express Response Lab");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back... & Hasta la vista, baby");
});

app.get("/mommie-dearest", (request, response) => {
  response.send("No wire hangers, EVER!");
});

app.get("/dave-chappelle", (request, response) => {
  response.send("I'm Rick James, bitch!");
});

app.get("/tom-hanks", (request, response) => {
  response.send(
    "There's no crying in baseball!... & My name is Forest Gump, people call me Forest Gump"
  );
});

app.get("/mr-mackey", (request, response) => {
  response.send("Drugs are bad, mmmkay?");
});

app.get("/gary-coleman", (request, response) => {
  response.send("What'choo talkin' 'bout Willis?");
});

app.get("/stan-marsh", (request, response) => {
  response.send("Oh my God, they killed Kenny!");
});

app.get("/the-church-lady", (request, response) => {
  response.send("Well, isn't that special?... & Could it be... SATAN?");
});

app.get("/eric-cartman", (request, response) => {
  response.send("Screw you guys, I'm going home!... & Respect mah authoritah!");
});

app.get("/show-girls", (request, response) => {
  response.send(
    "There's always someone younger and hungrier coming down the stairs after you... & Thanks. It's a Ver-sayce."
  );
});

app.get("/magic8", (request, response) => {
  response.send(
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
  );
});

// STRETCH
app.get("/magic8-h1", (request, response) => {
  let index = Math.floor(Math.random() * magic8Responses.length);
  response.send(`<h1>${magic8Responses[index]}</h1>`);
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});

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
];

// EXPORT
module.exports = app;
