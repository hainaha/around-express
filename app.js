const express = require('express');
const mongoose = require('mongoose');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/aroundb');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});

app.use((req, res, next) => {
  req.user = {
    _id: '63629286aff71e9fd43affe2',
  };

  next();
});
app.use('/', cardsRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`O aplicativo está escutando na porta ${PORT}`);
});
