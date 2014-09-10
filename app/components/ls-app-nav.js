import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-default'],
  attributeBindings: ['role'],
  role: 'navigation',

  name: 'AppName',
  isFluid: false,
});
