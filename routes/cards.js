const cardsRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/cards', (req, res) => {
  fsPromises
    .readFile(cardsPath, { encoding: 'utf8' })
    .then((cards) => res.send(JSON.parse(cards)))
    .catch(() =>
      res.status(500).send({ message: 'Um erro ocorreu no servidor' })
    );
});

module.exports = cardsRouter;
