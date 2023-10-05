// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();
const PORT = 3003;

// ROUTES
app.get('/', (request, response) => {
    response.send('Hello my Fellows in cohort 10.1!!');
})

// LISTEN
app.listen(3003, () => {
    console.log("Listening for requests on port ${PORT}'hands up!!'");
})