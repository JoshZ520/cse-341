const express = require('express');
require('dotenv').config();
const mongodb = require('./db/connect');

const app = express();

const PORT = process.env.PORT || 3000;

// Initialize database and start server
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        // Routes
        app.use('/', require('./routes-folder/routes.js'));
        
        app.listen(PORT, () => {
            console.log(`Web Server is listening at port ${PORT}`);
        });
    }
});
