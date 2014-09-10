import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'time',
  attributeBindings: ['datetime'],

  date: null,

  datetime: function() {
    var d = this.get('normalizedDate');
    if (!d) {
      return false;
    }
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
  }.property('normalizedDate'),

  displayDate: function() {
    var d = this.get('normalizedDate');
    if (!d) {
      return 'Invalid Date';
    }
    return [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/');
  }.property('normalizedDate'),

  normalizedDate: function() {
    var val = this.get('date'), ret;
    if (val instanceof Date) {
      ret = val;
    } else if (typeof val === 'string') {
      ret = Date.parse(val);
    } else if (typeof val === 'number') {
      ret = new Date(val);
    } else {
      ret = false;
    }
    return ret;
  }.property('date')
});
