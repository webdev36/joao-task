export default function() {

  this.get('/invoices');
  this.get('/invoices/:id');
  this.del('/invoices/:id');
  this.patch('/invoices/:id');
}
