import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route('home');
	this.route('resume');
	this.route('about');
});

export default Router;