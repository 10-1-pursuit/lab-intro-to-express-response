const express = require("express")
const app = express();



app.get("/emeril", (request, response)=>{
    response.send("Bam!")
});

app.get("/homer-simpson", (request, response)=>{
    response.send("D'Oh")
});
app.get("/bruce-banner", (request, response)=>{
    response.send(" Don't make me angry!")
});
app.get("/batman", (request, response)=>{
    response.send("To the Batmobile!")
});
app.get("/fraiser", (request, response)=>{
    response.send("I'm listening!")
});
app.get("/regis", (request, response)=>{
    response.send("Is that your final answer?")
});
app.get("/tony-montana", (request, response)=>{
    response.send("Say hello tomy little friend!")
});
app.get("/zeus", (request, response)=>{
    response.send("Release the Kraken!")
});
app.get("/james-bond", (request, response)=>{
    response.send("The name is Bond, James Bond!");

});
app.get("/frankenstein", (request, response)=>{
    response.send(" It's alive! It's alive!")
});

app.get("/magic8",(request,response)=>{
  
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
    
      let randoms = magic8Responses[(Math.floor(Math.random()*magic8Responses.length))];
      
      response.send(randoms)
})

app.listen(3003),()=>{
    console.log("I am listening!")
}