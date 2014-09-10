import Ember from 'ember';

var ItemProxy = Ember.ObjectProxy.extend({
  labelPath: 'name',
  label: function() {
    return this.get('content.name');
  }.property('content')
});

export default Ember.Component.extend({
  tagName: 'menu',
  isShowing: false,
  prompt: 'Search for item',
  searchKey: 'name',
  labelPath: 'name',
  searchText: '',

  hasSelectedValue: Ember.computed.bool('selection'),

  actions: {
    show: function() {
      this.set('isShowing', true);
    },

    selectItem: function(item) {
      this.setProperties({
        selection: item.get('content'),
        searchText: '',
        isShowing: false
      });
      return false;
    }
  },

  displayValue: function() {
    return this.get('selection').get(this.get('labelPath'));
  }.property('selection', 'labelPath'),

  filteredItems: function() {
    var c = this.get('content'),
        k = this.get('searchKey'),
        s = this.get('searchText'),
        r = new RegExp(s, 'i');
    return c.filter(function(i) {
      return r.test(i.get(k));
    }).map(function(i) {
      return this._wrap(i);
    }.bind(this));
  }.property('searchText', 'content', 'content.[]'),

  _wrap: function(item) {
    return ItemProxy.create({
      content: item,
      labelPath: this.get('labelPath')
    });
  }
});
