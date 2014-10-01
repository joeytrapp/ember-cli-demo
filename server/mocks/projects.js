var PROJECTS = [
  { id: 1, name: 'Fairmount' },
  { id: 2, name: 'Serenity' },
  { id: 3, name: 'Education Unlimited' }
];

module.exports = function(app) {
  var express = require('express');
  var projectsRouter = express.Router();

  projectsRouter.get('/', function(req, res) {
    res.send({ projects: PROJECTS });
  });

  projectsRouter.get('/:id', function(req, res) {
    var project = PROJECTS.filter(function(p) {
      return +p.id === +req.params.id;
    })[0];
    res.send({ projects: [project] });
  });

  app.use('/api/projects', projectsRouter);
};
