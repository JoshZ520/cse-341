const express = require('express');
require('dotenv').config();
const mongodb = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

// Initialize database and start server
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        // Routes
        app.use('/', require('./routes/contacts.js'));
        
        app.listen(PORT, () => {
            console.log(`Web Server is listening at port ${PORT}`);
            console.log(`Server: http://localhost:${PORT}`);
            console.log(`API Docs: http://localhost:${PORT}/api-docs`);
        });
    }
});
