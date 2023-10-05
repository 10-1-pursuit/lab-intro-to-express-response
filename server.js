
const app = require('./app.js')

const PORT = 3003


//APP LISTENER

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})