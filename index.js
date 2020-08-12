const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.port || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`The coffee-shop is starting on port ${PORT}`);
});
