const express = require("express");

const app = express();

const port = 3003;

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

app.get("/", (request, response) => {

    response.send("Hello World!")

});


app.get("/terminator", (request, response) => {
    response.send("I'll be back!")
})
app.get("/terminator2", (request, response) => {

    response.send("Hasta la vista, baby!")

})

app.get("/TonyMontana", (request, response) => {
    response.send("Say hello to my little friend!")


})

app.get("/HomerSimpson", (request, response) => {

    response.send("D'Oh!");
})


app.get("/Gollum", (request, response) => {

    response.send("My precious!");
})

app.get("/jjevans", (request, response) => {

    response.send("Dy-No-Myte");
})

app.get("/jimlovell", (request, response) => {

    response.send("Houston, we have a problem");
})

app.get("/dorothy", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore");

})


app.get("/Zeus", (request, response) => {
    response.send("Release the kraken");

})

app.get("/travisbickle", (request, response) => {

    response.send("You talkin' to me?");
})

app.get("/rodtidwell", (request, response) => {

    response.send("Show me the money!");
})

app.get("/foxmulder", (request, response) => {

    response.send("The truth is out there");
})





app.get("/magic8", (request, response) => {

    const randomResponseIndex = Math.floor(Math.random() * magic8Responses.length);

    const randomQuoteGenerator = magic8Responses[randomResponseIndex]
    response.send(`<h1>${randomQuoteGenerator}</h1>`)
})



app.listen(port, () => {

    console.log(`Listening on port ${port}`)

});


