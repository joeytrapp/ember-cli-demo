import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      'Lee Forkenbrock',
      'Donatas Kairys',
      'Joey Trapp',
      'Justin Yost',
      'Rick Guyer',
      'Brian Porter',
      'Kris Dockter',
      'Andrew Lechowicz',
      'Gregory Gaskill'
    ].map(function(name, idx) {
      var bits = name.split(' ');
      return Ember.Object.create({
        id: idx + 1,
        firstName: bits[0],
        lastName: bits[1]
      });
    });
  }
});
