import Controller from '@ember/controller';
import { computed } from '@ember/object';
import moment from 'moment';
import { sort } from '@ember/object/computed'; 
import { filter } from '@ember/object/computed'; 
import { alias } from '@ember/object/computed';


export default Controller.extend({

	// data: alias('model'),
	// dateSorting: ['date:asc'],
	// sortedInvoices: sort('data', 'dateSorting'),

	start: null,
	end: null,

	invoices: computed(function() {
		return this.model;
	}),
	
	total_amount: computed('invoices', function() {
		let result = 0;
		this.invoices.forEach((invoice) => {
			result += parseFloat(invoice.amount);
		})
		return result;
	}),

	filterByDate: function(){
		if(this.start == null) {
			this.set('invoices', this.get("model"));
		} else {
			let invoices = this.get("model").filter((invoice) => {
      	return moment(invoice.get("date")) >= moment(this.start) && moment(invoice.get("date")) <= moment(this.end)
	    });
	    this.set('invoices', invoices);
		}
 	},

	actions: {
		sortByASC() {
			this.set('invoices', this.invoices.sortBy('date'));
		},
		sortByDESC() {
			this.set('invoices', this.invoices.sortBy('date').reverse());
		},
		filter(start, end) {
			this.set('start', start);
			this.set('end', end);
			this.filterByDate();
		},
		removeItem(id) {
			this.model.forEach((record) => {
				if(record.id == id) {
					record.destroyRecord().then(() => {
						this.filterByDate();
					});
				}
			});
		}
	}

});