/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
// var pickFiles = require('broccoli-static-compiler');
// var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, { });

  // app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
  //
  // var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  //     srcDir: '/',
  //     destDir: 'fonts/bootstrap'
  // });

  return app.toTree();
  //return mergeTrees([app.toTree(), bootstrapFonts]);
};
