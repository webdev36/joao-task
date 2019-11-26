import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('invoices', function() {
    this.route('edit', { path: '/:invoice_id' });
  });
});

export default Router;
