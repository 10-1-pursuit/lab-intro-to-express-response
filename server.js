// Dependencies
const app = require('./app');

// Configuration
const PORT = 3003;

// Listen
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
