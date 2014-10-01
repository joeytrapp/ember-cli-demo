import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName:  DS.attr('string'),

  fullName: function(key, value) {
    var bits;
    if (arguments.length > 1) {
      bits = value.split(' ');
      this.set('firstName', bits[0]);
      this.set('lastName', bits.slice(1).join(' '));
      return value;
    }
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
