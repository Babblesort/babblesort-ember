import DS from 'ember-data';

export default DS.Model.extend({
	libraryName: DS.attr('string'),
	version: DS.attr('string'),
	image: DS.attr('string'),
	description: DS.attr('string'),
	url: DS.attr('string')
});