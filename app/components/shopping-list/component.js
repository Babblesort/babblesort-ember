import Ember from 'ember';
import DragulaContainer from 'babblesort/components/dragula-container/component';
import globals from 'babblesort/utils/globals';

export default DragulaContainer.extend({
	classNames: ['shopping-list'],
	containerType: globals.ShoppingList
});
