import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    sections: {embedded: 'always'}
  },
  normalizeResponse (store, primaryModelClass, payload, id, requestType){
    payload = {
      templates: {
        id: payload.id,
        name: payload.name,
        type: payload.type,
        sections: payload.items
          .filter(item => item.type === "section")
          .map((section) => {
            section.id = section.item_id;
            section.items = payload.items
              .filter((item) => item.parent_id === section.item_id)
              .map((item) => {
                item.id = item.item_id;
                return item;
              })
            return section;
          })
      }
    }

    debugger;

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
