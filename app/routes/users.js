import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },

  actions: {
    allTheAlerts: function() {
      alert('app/route/users.js');
      return true;
    }
  }
});
