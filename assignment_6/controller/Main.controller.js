sap.ui.define([
    "sap/m/Button",
    "sap/m/Dialog",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/SimpleForm",
    "sap/ui/core/mvc/Controller",
    "your/namespace/CustomButton",
], function (Controller, CustomButton) {
    "use strict";

    return Controller.extend("your.namespace.Main", {
        onInit: function () {
            // You can perform initialization here
        },

        onCustomHover: function () {
            // Open the dialog with a SimpleForm
            var oDialog = new Dialog({
                title: "Dialog Title",
                content: new SimpleForm({
                    content: [
                        new Label({ text: "Label 1" }),
                        new Input(),
                        new Label({ text: "Label 2" }),
                        new Input(),
                        // Add more form elements as needed
                    ]
                }),
                beginButton: new Button({
                    text: "Close",
                    press: function () {
                        oDialog.close();
                    }
                }),
                afterClose: function () {
                    oDialog.destroy();
                }
            });

            oDialog.open();
        }
    });
});
