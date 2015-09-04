import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['dragula-drake'],
	drake: null,

	registeredContainers: [],

	willInsertElement:function(){
		this.set('drake', window.dragula());
	},
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
