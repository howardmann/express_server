import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    sections: {embedded: 'always'}
  },
  normalizeResponse (store, primaryModelClass, payload, id, requestType){
    let newPayload = {
      templates: {
        id: payload.id,
        name: payload.name,
        type: payload.type,
        sections: payload.items.filter(function(item){
          return item.type === "section";
        })

      }
    }
    // Iterate through sections array and add property (forEach does not return so we do this after)
    newPayload.templates.sections.forEach(function(item){
      item.id = item.item_id;
      item.items = payload.items.filter(function(el){
        return el.parent_id === item.item_id;
      });
    });

    newPayload.templates.sections.forEach(function(section){
      section.items.forEach(function(item){
        return item.id = item.item_id;
      })
    });


    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
