import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    allTheAlerts: function() {
      alert('app/route/user.js');
      return true;
    }
  }
});
