import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var user = this.modelFor('users').find(function(user) {
      return +user.get('id') === +params.user_id;
    });
    if (!user) {
      return this.transitionTo('users');
    }
    return user;
  }
});
