import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['collection-item'],
	item: null,
	detailsVisible: false,
	actions: {
		toggleDetails: function() {
			this.toggleProperty('detailsVisible');
		}
	}
});