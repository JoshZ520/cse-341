const express = require('express');
const app = express();

// Routes
app.use('/', require('./routes-folder/routes.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Web Server is listening at port ${PORT}`);
});
