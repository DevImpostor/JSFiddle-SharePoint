var Record = function (data) {
    var self = this;

    this.invoice_id = ko.observable(data.invoice_id);
    this.customer_id = ko.observable(data.customer_id);
    this.customer_name = ko.observable(data.customer_name);
    this.invoice_date = ko.observable(data.invoice_date);
    this.delivery_method = ko.observable(data.delivery_method);

    this.openRecord = function () {
        this.showIncidentDialog(true);
        //alert('You have clicked on ' + this.number());
    }.bind(this);
};

function viewModelMain() {
    var self = this;
    
    self.delivery_methods = [
        { method: "Print" },
        { method: "Email" }
    ];
    
    self.selectedMethod = ko.observable({ method: "Select..." });
    self.search = function () {
        //this.showIncidentDialog(true);
        alert('You have clicked on Search ');
    }.bind(this);
    

    this.records = ko.observableArray([
    new Record({
        invoice_id: "1111",
        customer_id: "1234",
        customer_name: "Bob's Burgers",
        invoice_date: "5-3-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "2222",
        customer_id: "2345",
        customer_name: "Ikea",
        invoice_date: "3-23-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "3333",
        customer_id: "3456",
        customer_name: "Walmart",
        invoice_date: "1-9-2015",
        delivery_method: "Print"
    }),
    new Record({
        invoice_id: "4444",
        customer_id: "4567",
        customer_name: "Jewel",
        invoice_date: "12-3-2014",
        delivery_method: "Print"
    })]);
    
    //$("#invoice_table").DataTable({
    //    responsive: true
    //});

}

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
    ko.applyBindings(new viewModelMain());
    $('input[name="daterange"]').daterangepicker();
});