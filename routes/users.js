const usersRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

usersRouter.get('/users', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Um erro ocorreu no servidor' });
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});

usersRouter.get('/users/:id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Um erro ocorreu no servidor' });
    }
    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);
    if (!user) {
      res.status(404).send({ message: 'ID do usuário não encontrado' });
    } else {
      res.send(user);
    }
  });
});

module.exports = usersRouter;
