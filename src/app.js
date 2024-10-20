const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware til at parse JSON-data
app.use(express.json());

// Middleware til at logge anmodninger
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Middleware til at servere statiske filer
app.use(express.static(path.join(__dirname, 'public')));

// Definer en grundlæggende GET-rute til rod-URL'en
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Fejlhåndtering middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
