import Ember from 'ember';

export default Ember.Component.extend({

	eventBus: Ember.inject.service('dragula-event-bus'),
	classNames: ['dragula-container'],

	_registerEventBody: function() {
		return {
			component: this,
			el: this.$()[0]
		};
	},

	didInsertElement: function () {
		this.get('eventBus').trigger('register', this._registerEventBody());
	}

});
