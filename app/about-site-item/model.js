import DS from 'ember-data';

export default DS.Model.extend({
  libraryName: DS.attr('string'),
  details: DS.belongsTo('about-site-item-details')
});
