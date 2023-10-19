// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()
const PORT = 3003

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello my Fellow\s in Cohort 10.1!!')
})

app.get('terminator', (req, res) => {
    res.send('1. I\ll be back!')
})

app.get('bruce-willis', (req, res) => {
    res.send('2. Yippee Ki Yay!')
})

app.get('homer-simpson', (req, res) => {
    res.send('3. D\Oh!')
})

app.get('borg', (req, res) => {
    res.send('4. Resistance is futile!')
})

app.get('dorothy', (req, res) => {
    res.send('5. Toto, I\ve got a feeling we\\re not in Kansas anymore!')
})

app.get('dean-winchester', (req, res) => {
    res.send('6. Awesome!')
})

app.get('gene-kelly', (req, res) => {
    res.send('7. I\m singing in the rain!')
})

app.get('pharrell-williams', (req, res) => {
    res.send('8. So Happy!')
})

app.get('gloria-gaynor', (req, res) => {
    res.send('9. I will survive!')
})

// LISTEN
app.listen(PORT, () => {
    console.log('Listening for requests on port ${PORT}')
})