const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000;

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// API route to get client details
app.get('/api/clients', (req, res) => {
    fs.readFile('./data/clients.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading client data');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
