// DEPENDENCIES
const express = require('express')
const app = express()

// CONFIGURATION
const = app express()
const PORT = 3003

// ROUTES
app.get('/', (request, response) => {
    response.send('Hello my Fellows in Cohort 10.1!!')
})

// LISTEN
app.listen(PORT, () => {
    console.log("Listening for requests on port ${PORT}")
})