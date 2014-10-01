import Ember from 'ember';

export default Ember.ObjectController.extend({
  foo: 'Bar',

  name: function() {
    return this.get('model.name') + ' is the project name';
  }.property('model.name'),

  actions: {
    saveProject: function() {
      this.set('foo', 'Saved');
      alert('Save project');
    }
  }
});
