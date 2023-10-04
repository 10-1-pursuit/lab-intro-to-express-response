const express = require("express");

const app = express();

const port = 3003;

app.get("/", (request, response) => {

    console.log("Hello World!")

    response.send("Hello World!")

    app.listen("port", () => {

        console.log(`Listening on port ${port}`)

    });
});