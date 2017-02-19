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
        sections: payload.items
          .filter(item => item.type === "section")
          .map((section) => {
            section.id = section.item_id;
            return section;
          })
      }
    };

    // Add associated nested items to sections
    newPayload.templates.sections.map(section => {
      section.items = payload.items
        .filter(item => item.parent_id === section.id)
        .map(item => {
          item.id = item.item_id;
          return item;
        })
    });

    // Add associated nested subitems to items
    newPayload.templates.sections.map(section => {
      section.items.map(sectionItem => {
        sectionItem.subitems = payload.items
          .filter(item => item.parent_id === sectionItem.id)
          .map(item => {
            item.id = item.item_id;
            return item;
          })
      })
    })

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
