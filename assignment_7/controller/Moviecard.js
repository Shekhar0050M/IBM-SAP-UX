sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Button"
], function (Control, Button) {
    "use strict";

    return Control.extend("app.Moviecard", {
        metadata: {
            properties: {
                title: { type: "string", defaultValue: "" },
                description: { type: "string", defaultValue: "" },
                rating: { type: "float", defaultValue: 0 },
                genre: { type: "string", defaultValue: "" },
                language: { type: "string", defaultValue: "" }
            },
            events: {
                press: {}
            },
            aggregations: {
                bookButton: { type: "sap.m.Button", multiple: false }
            }
        },

        init: function () {
            this.setAggregation("bookButton", new Button({
                text: "Book Ticket",
                press: this._onBookTicket.bind(this)
            }));
        },

        _onBookTicket: function () {
            this.fireEvent("press");
        },

        renderer: {}
    });
});
