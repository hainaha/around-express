const usersRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

usersRouter.get('/users', (req, res) => {
  fsPromises
    .readFile(usersPath, { encoding: 'utf8' })
    .then((users) => res.send(JSON.parse(users)))
    .catch(() =>
      res.status(500).send({ message: 'Um erro ocorreu no servidor' })
    );
});

usersRouter.get('/users/:id', (req, res) => {
  fsPromises
    .readFile(usersPath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.find((item) => item._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'ID do usuário não encontrado' });
      } else {
        res.send(user);
      }
    })
    .catch(() =>
      res.status(500).send({ message: 'Um erro ocorreu no servidor' })
    );
});

module.exports = usersRouter;
