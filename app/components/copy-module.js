import Ember from 'ember';
const RETURN_CODE = 13;
export default Ember.Component.extend({
  classNames: ['copy-module'],
  attributeBindings: ['tabIndex:tabindex'],
  hasCopied: false,
  tabIndex: 0,

  init () {
    this._super(...arguments);
    this.set('statusText', this.get('hoverStatusText'));
  },
  focusOut () {
    this._resetStatusText();
  },
  mouseLeave () {
    // this._resetStatusText();
  },
  keyPress ({ keyCode }) {
    if(keyCode === RETURN_CODE) {
      this._triggerCopy();
    }
  },
  click () {
    this._triggerCopy();
  },
  _resetStatusText () {
      this.set('statusText', this.get('hoverStatusText'));
      this.set('hasCopied', false);
  },
  _triggerCopy () {
    Ember.assert('oh no', this._copy());
    this.set('hasCopied', true);
    this.set('statusText', this.get('clickedStatusText'));
  },
  _copy () {
    const textarea = this.$('.copy-module__textarea')[0];
    textarea.focus();
    textarea.select();
    return document.execCommand('copy');
  },
});
