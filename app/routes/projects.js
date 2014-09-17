import Ember from 'ember';
/* global $ */

export default Ember.Route.extend({
  model: function() {
    return $.getJSON('/api/projects').then(function(res) {
      return res.projects;
    });
  }
});
