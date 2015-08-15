import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'About This Site',
  model: function() {
    let buildItems = Ember.A([
      {
        lib: 'ember js',
        details: {
          image: '',
          description: 'javascript framework for creating ambitious applications.',
          url: 'http://ember.js'
        }
      },
      {
        lib: 'ember-cli',
        details: {
          image: '',
          description: 'command line interface for creating and building ember applications.',
          url: 'http://ember.js'
        }
      },
      {
        lib: 'ember-cli-materialize',
        details: {
          image: '',
          description: 'CSS and component library based on Material Design.',
          url: ''
        }
      },
      {
        lib: 'liquid-fire',
        details: {
          image: '',
          description: 'Animation and transition library for ember applications.',
          url: 'http://ember.js'
        }
      }
    ]);
    return buildItems;
  }

});
