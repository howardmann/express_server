import DS from 'ember-data';

export default DS.Model.extend({
  template: DS.belongsTo('template'),
  label: DS.attr('string'),
  items: DS.hasMany('item')
});
