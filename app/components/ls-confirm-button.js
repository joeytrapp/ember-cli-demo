import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  attributeBindings: ['type'],
  type: 'button',
  confirmText: 'Are you sure?',

  click: function(e) {
    if (confirm(this.get('confirmText'))) {
      this.sendAction();
    }
  }
});
