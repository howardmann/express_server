import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('students');
  this.route('templates', function() {
    this.route('template', {
      path: ':template_id'
    });
  });
});

export default Router;
