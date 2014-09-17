import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberSeminarENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id' });
  });
  this.resource('projects', function() {
    this.route('create');
    this.resource('project', { path: '/:project_id' });
  });
});
export default Router;
