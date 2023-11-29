sap.ui.define([
    "sap/m/Button",
    "sap/m/Dialog",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/SimpleForm",
], function (Button, Dialog, Label, Input, SimpleForm) {
    "use strict";

    return Button.extend("your.namespace.CustomButton", {
        metadata: {
            events: {
                customhover: {},
            },
        },

        onmouseover: function () {
            this.fireCustomhover();
        },

        init: function () {
            // You can perform additional initialization here
        },

        renderer: function (oRm, oControl) {
            // Extend the default renderer if needed
            ButtonRenderer.render(oRm, oControl);
        }
    });
});
