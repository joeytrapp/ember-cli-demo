import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberSeminarENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('users');
  this.resource('projects', function() {
    this.route('create');

    this.resource('project', function() {});
  });
});

export default Router;
