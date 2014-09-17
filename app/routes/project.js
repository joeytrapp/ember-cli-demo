import Ember from 'ember';
/* global $ */

export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON('/api/projects/' + params.project_id).then(function(res) {
      return res.project;
    });
  }
});
