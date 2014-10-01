var USERS = [
  { id: 1, first_name: 'Lee',     last_name: 'Forkenbrock' },
  { id: 2, first_name: 'Donatas', last_name: 'Kairys' },
  { id: 3, first_name: 'Joey',    last_name: 'Trapp' },
  { id: 4, first_name: 'Justin',  last_name: 'Yost' },
  { id: 5, first_name: 'Rick',    last_name: 'Guyer' },
  { id: 6, first_name: 'Brian',   last_name: 'Porter' },
  { id: 7, first_name: 'Kris',    last_name: 'Dockter' },
  { id: 8, first_name: 'Andrew',  last_name: 'Lechowicz' },
  { id: 9, first_name: 'Gregory', last_name: 'Gaskill' }
];

module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({ users: USERS });
  });

  usersRouter.get('/:id', function(req, res) {
    var user = USERS.filter(function(u) {
      return +u.id === +req.params.id;
    })[0];
    res.send({ users: [user] });
  });

  app.use('/api/users', usersRouter);
};
