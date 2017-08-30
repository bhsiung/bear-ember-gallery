import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('gallery', function() {
    this.route('dropdown-input-combo');
    this.route('copy-module');
  });
});

export default Router;
