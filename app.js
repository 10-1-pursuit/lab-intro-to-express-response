const express = require("express");
const app = express();

app.listen(3003);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be Back");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/juicy-fruit", (req, res) => {
  res.send("it is juicy");
});

app.get("/nicki", (req, res) => {
  res.send("Nah mean 💪🏽");
});

app.get("/homer", (req, res) => {
  res.send("why i outta - doh");
});

app.get("/bart", (req, res) => {
  res.send("HA HA!!");
});

app.get("/lisa", (req, res) => {
  res.send("I will be president");
});



app.get("/tomatoes-onion", (req, res) => {
        const tomatoOnionSoup = { ingredients: "🍅 => 🧅", price: 28.0, user: true };
        res.send(tomatoOnionSoup);
        res.send(soup());
});
