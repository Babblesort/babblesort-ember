/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		sassOptions: {
			includePaths: ['bower_components/materialize/sass']
		}
	});

	app.import('bower_components/dragula/dist/dragula.min.js');
	app.import('bower_components/dragula/dist/dragula.min.css');

	return app.toTree();
};