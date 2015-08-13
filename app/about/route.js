import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'About This Site',
  model: function() {
    let buildItems = Ember.A([
      'ember js',
      'ember-cli',
      'ember-cli-materialize',
    ])
    return buildItems;
  }

});
