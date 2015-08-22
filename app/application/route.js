import Ember from 'ember';

export default Ember.Route.extend({
	title: function(tokens) {
		var base = 'Babblesort';
		var hasTokens = tokens && tokens.length;

		return hasTokens ? (base + ' - ' + tokens.reverse().join(' | ')) : base;
	}
});