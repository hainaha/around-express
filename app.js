const express = require('express');

const cardsRouter = require('./routes/cards');

const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {});
