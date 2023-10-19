// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()
const PORT = 3003

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello my Fellows in Cohort 10.1!!')
})

app.get('/terminator', (req, res) => {
    res.send('I\'ll be back!')
})

app.get('/bruce-willis', (req, res) => {
    res.send('Yippee Ki Yay!')
})

app.get('/homer-simpson', (req, res) => {
    res.send('D\'Oh!')
})

app.get('/borg', (req, res) => {
    res.send('Resistance is futile!')
})

app.get('/dorothy', (req, res) => {
    res.send('Toto, I\'ve got a feeling we\'re not in Kansas anymore!')
})

app.get('/dean-winchester', (req, res) => {
    res.send('Awesome!')
})

app.get('/gene-kelly', (req, res) => {
    res.send('I\'m singing in the rain!')
})

app.get('/pharrell-williams', (req, res) => {
    res.send('Because I\'m Happy!')
})

app.get('/gloria-gaynor', (req, res) => {
    res.send('I will survive!')
})

// LISTEN
app.listen(PORT, () => {
    console.log('Listening for requests on port ${PORT}')
})