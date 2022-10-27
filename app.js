const express = require('express');

const cardsRouter = require('./routes/cards');

const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.get('/', (req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`O aplicativo está escutando na porta ${PORT}`);
});
