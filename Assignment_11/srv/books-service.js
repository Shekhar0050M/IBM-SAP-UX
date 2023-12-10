// srv/books-service.js
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Books } = this.entities;

    // Custom logic for Books entity after READ event
    this.after('READ', 'Books', (each) => {
        if (each.stock > 15) {
            each.criticality = 'green';
        } else if (each.stock > 0 && each.stock < 15) {
            each.criticality = 'orange';
        } else if (each.stock === 0) {
            each.criticality = 'red';
        }
    });
});
