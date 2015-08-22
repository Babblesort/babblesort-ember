import Ember from 'ember';

export default Ember.Route.extend({

  titleToken: 'About This Site',

  model: function() {
    return this.store.findAll('about-site-item');
  }

});
