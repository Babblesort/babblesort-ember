window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
	workflow: [
	    { handler: "silence", matchMessage: "Ember.Handlebars.helper is deprecated, please refactor to Ember.Helper.helper" },
	    { handler: "silence", matchMessage: "Using Ember.Handlebars.makeBoundHelper is deprecated. Please refactor to using `Ember.Helper.helper`." },
	    { handler: "silence", matchMessage: "Using `Ember.HTMLBars.makeBoundHelper` is deprecated. Please refactor to using `Ember.Helper` or `Ember.Helper.helper`." },
	    { handler: "silence", matchMessage: "Using Ember.HTMLBars._registerHelper is deprecated. Helpers (even dashless ones) are automatically resolved." },
	    { handler: "silence", matchMessage: "Passing the dependentKeys after the callback function in Ember.observer is deprecated. Ensure the callback function is the last argument." },
	    { handler: "silence", matchMessage: "`lookupFactory` was called on a Registry. The `initializer` API no longer receives a container, and you should use an `instanceInitializer` to look up objects from the container." },
	    { handler: "silence", matchMessage: "Ember.View is deprecated. Consult the Deprecations Guide for a migration strategy." },
	    { handler: "silence", matchMessage: "Ember.Select is deprecated. Consult the Deprecations Guide for a migration strategy." },
	    { handler: "silence", matchMessage: "The default behavior of shouldReloadAll will change in Ember Data 2.0 to always return false when there is at least one \"about-site-item\" record in the store. If you would like to preserve the current behavior please override shouldReloadAll in your adapter:application and return true." },
	    { handler: "silence", matchMessage: "`lookup` was called on a Registry. The `initializer` API no longer receives a container, and you should use an `instanceInitializer` to look up objects from the container." }
	]
};

