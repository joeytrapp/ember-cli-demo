import Ember from 'ember';

export default Ember.Controller.extend({
  today: new Date(),

  selectedItem: null,

  selectItems: [
    Ember.Object.create({ id: 1, name: 'Red' }),
    Ember.Object.create({ id: 2, name: 'Orange' }),
    Ember.Object.create({ id: 3, name: 'Yellow' }),
    Ember.Object.create({ id: 4, name: 'Green' }),
    Ember.Object.create({ id: 5, name: 'Blue' }),
    Ember.Object.create({ id: 6, name: 'Indigo' }),
    Ember.Object.create({ id: 7, name: 'Violet' })
  ],

  selectedItemChanged: function() {
    console.log(this.get('selectedItem'));
  }.observes('selectedItem'),

  actions: {
    saveTheThing: function() {
      alert('Saving the thing');
    }
  }
});
