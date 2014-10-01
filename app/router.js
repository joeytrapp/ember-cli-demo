import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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
