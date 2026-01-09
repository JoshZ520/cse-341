const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Meghan Zobrist");
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Sever is listening at port ' + (process.env.PORT || 3000));
});