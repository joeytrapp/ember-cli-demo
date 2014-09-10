import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  attributeBindings: ['type'],
  type: 'button',
  confirmText: 'Are you sure?',
  classNameBindings: ['classes'],

  classes: function() {
    var requested = this.get('style'), extra = ['btn-default'];
    if (typeof requested === 'string') {
      extra = requested.split(' ').map(function(i) {
        return 'btn-' + i;
      });
    }
    return ['btn'].concat(extra).join(' ');
  }.property('style'),

  click: function() {
    if (confirm(this.get('confirmText'))) {
      this.sendAction();
    }
  }
});
