// YOU DO NOT NEED TO EDIT THIS FILE

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to handle file uploads
app.post('/upload', (req, res) => {
    const content = req.body.content;
    const title = req.body.title;
    const filePath = path.join(__dirname, 'text_files', `${title}.txt`);
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file');
        } else {
            console.log('File saved successfully');
            res.status(200).send('File saved successfully');
        }
    });
});

// Serve index.html
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
