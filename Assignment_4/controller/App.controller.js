sap.ui.define([
    "sap/m/Button",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/mvc/JSONView",
    "sap/ui/core/Fragment",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Button, XMLView, JSONView, Fragment, Controller, MessageToast) {
    "use strict";
    // new Button({
    //     text: "Click me JS"
    // }).placeAt("content");
    XMLView.create({
        viewName: "com.ibm.application.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    // JSONView.create({
    //     viewName: "com.ibm.application.view.App"
    // }).then(function (oView) {
    //     oView.placeAt("content");
    // });
    return Controller.extend("com.ibm.application.controller.App", {
        onButtonPress: function () {
            alert("Button pressed for App");
        },
        onRegistrationButtonPress: function () {
            // alert("Button pressed for Embedded xml");
            var oView = this.getView();
            // //well I think this will work
            Fragment.load({
                id: oView.getId(),
                name: "com.ibm.application.fragments.App",
                controller: this
            }).then(function (oDialog) {
                oView.addDependent(oDialog);
                oDialog.open();
            }.bind(this));
        },
        onLogin: function () {
            MessageToast.show("Registration Completed");
            this.byId("registrationDialog").close();
        },
        onCancel: function () {
            this.byId("registrationDialog").close();
        }
    })
});