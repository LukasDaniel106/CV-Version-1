// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit_form', (req, res) => {
    const { name, email, message } = req.body;

    // You can add logic here to handle the form data, e.g., save it to a database, send an email, etc.
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Send a response back to the user
    res.send('Vielen Dank für Ihre Nachricht!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
