require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const IP = process.env.IP;

app.use(express.static('public'));

app.use('/', require('./server/routes/main'));

app.listen(PORT, IP, () => {
    console.log(`app listening on port ${PORT}`);
})