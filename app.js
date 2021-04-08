const express = require('express');
const router = require('./routes/superhero');
const errorHandler = require('./middlewares/error.handlers');
const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use('/api/superheroes', router);

app.use(errorHandler);

module.exports = app;