const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => {
    console.log('Successfully connected to the database.');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});