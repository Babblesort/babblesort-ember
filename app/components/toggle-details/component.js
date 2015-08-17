import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['toggle-target'],
  item: null,
  detailsVisible: false,
  actions: {
    toggleDetails: function() {
      this.toggleProperty('detailsVisible');
    }
  }
});
