sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/SimpleForm",
    "sap/m/Button"
], function (Controller, Dialog, SimpleForm) {
    "use strict";

    return Controller.extend("your.namespace.Main", {
        onInit: function () {
            // Initialization code if needed
        },

        onCustomHover: function () {
            this._openDialog();
        },

        _openDialog: function () {
            var oDialog = new Dialog({
                title: "Dialog Title",
                content: new SimpleForm({
                    content: [
                        // Add your SimpleForm content here
                    ],
                }),
                // @ts-ignore
                beginButton: new Button({
                    text: "Close",
                    press: function () {
                        oDialog.close();
                    },
                }),
            });

            oDialog.open();
        },
    });
});
