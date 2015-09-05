import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['dragula-drake'],

	eventBus: Ember.inject.service('dragula-event-bus'),
	drake: null,
	registeredContainers: [],

	willInsertElement: function() {
		this.set('drake', window.dragula());
	},

	_listen: Ember.on('init', function() {
		this.get('eventBus').on('register', this, 'registerContainer');
	}),

	registerContainer: function (container) {
		if(this.get('drake')) {
			this.get('drake').containers.pushObject(container.el);
		}
	},

	willDestroyElement:function(){
		this.drake.destroy();
		this.set('drake', null);
	}

});
