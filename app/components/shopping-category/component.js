import Ember from 'ember';
import DragulaContainer from 'babblesort/components/dragula-container/component';
import globals from 'babblesort/utils/globals';

export default DragulaContainer.extend({
	classNames: ['shopping-category'],
	containerType: globals.ShoppingCategory,

	_registerEventBody: function() {
		return {
			component: this,
			el: this.$('.shopping-category-container')[0]
		};
	},

});
