import { Factory } from 'ember-cli-mirage';
import faker from 'faker';


export default Factory.extend({

	amount() {
		return faker.finance.amount();
	},
	date() {
		return faker.date.past();
	}

});
