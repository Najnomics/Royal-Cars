const express = require('express');
const app = express();
const bodyParser = require('body-parser');
module.exports = app.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded