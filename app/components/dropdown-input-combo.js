import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'fieldset',
  init() {
    this._super(...arguments);
    this.set('currentOption', this.get('options')[this.get('defaultIndex')]);
  },
  actions: {
    dropdownChange (e) {
      this.set('currentOption', this.get('options').findBy('value', e.target.value));
      const dropdownChangedAction = this.get('dropdownChangedAction');
      if (dropdownChangedAction) {
        dropdownChangedAction(...arguments);
      }
    }
  },
});
