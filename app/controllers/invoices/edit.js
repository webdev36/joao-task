import Controller from '@ember/controller';
import { getOwner } from '@ember/application';


export default Controller.extend({

	actions: {
		save(model) {
			let router_main = getOwner(this).lookup('router:main');
			model.save().then(function() {
				router_main.transitionTo('invoices');
			});
		}
	}
});
