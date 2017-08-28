import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      type: '',
      value: '',
      options: [
        { displayText: "please select one....", value: '', placeholder: '' },
        { displayText: "bear1", value: 'bear1', placeholder: 'something for bear1' },
        { displayText: "bear2", value: 'bear2', placeholder: 'cherry' },
        { displayText: "bear3", value: 'bear3', placeholder: 'oh, my honey' },
      ]
    }
  },
  actions: {
    dropdownChangedAction (e) {
      this.controller.set('model.type', e.target.value);
    },
    inputChangedAction (e) {
      this.controller.set('model.value', e.target.value);
    },
  },
});
