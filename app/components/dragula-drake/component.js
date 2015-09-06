import Ember from 'ember';
import globals from 'babblesort/utils/globals';

export default Ember.Component.extend({

	eventBus: Ember.inject.service('dragula-event-bus'),
	drake: null,
	registeredContainers: [],

	willInsertElement: function() {
		this.set('drake', window.dragula({
			accepts: (el, target, source, sibling) => {
				return this.containerType(source) === this.containerType(target);
			}
		}));
	},

	_listen: Ember.on('init', function() {
		this.get('eventBus').on('register', this, 'registerContainer');
	}),

	containerType: function(containerEl) {
		let registeredContainer = this.registeredContainers.find(container => container.el === containerEl)
		if(registeredContainer) {
			return registeredContainer.component.get('containerType');
		}
	},

	registerContainer: function (container) {
		if(this.get('drake')) {
			this.get('drake').containers.pushObject(container.el);
			this.registeredContainers.pushObject(container);
		}
	},

	willDestroyElement:function(){
		this.drake.destroy();
		this.set('drake', null);
	}

});
