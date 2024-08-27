// Lade die Umgebungsvariablen
require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Middleware, um das Parsen von Formulardaten zu ermöglichen
app.use(express.urlencoded({ extended: true }));

// Route für das Formular
app.post('/submit-form', async (req, res) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6Lfp3C8qAAAAAP3gsVmFX3HLejH3g0qpT2xyXv7o';
    const token = req.body['g-recaptcha-response'];

    // Sende das reCAPTCHA-Token zur Verifizierung an Google
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
        method: 'POST',
    });

    const data = await response.json();

    if (data.success) {
        // Verifizierung war erfolgreich
        res.send('Verifizierung erfolgreich, Formular wurde abgeschickt!');
    } else {
        // Verifizierung ist fehlgeschlagen
        res.status(400).send('Verifizierung fehlgeschlagen, bitte versuche es erneut.');
    }
});

// Starte den Server
app.listen(3000, () => {
    console.log('Server läuft auf http://localhost:3000');
});
