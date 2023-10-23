// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 3003;

// ROUTES
app.get("/", (request, response) => {
  response.send("Welcome to My Express Response Lab");
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});

// EXPORT
module.exports = app;
