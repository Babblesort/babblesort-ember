import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  company: 'company name',
  description: 'job description',
  skills: ['c#', 'asp.net mvc', 'ember', 'angular', 'javascript', 'sql server']
});
