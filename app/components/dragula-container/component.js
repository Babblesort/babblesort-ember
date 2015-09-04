import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['dragula-container'],

	didInsertElement: function () {
		if(this.get('parentView')) {
			this.get('parentView').registerContainer(
				{
					component: this,
					el: this.$()[0]
				}
			);
		}
	}
});
