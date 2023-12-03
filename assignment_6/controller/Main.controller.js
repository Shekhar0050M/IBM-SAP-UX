// Main.controller.js
sap.ui.define([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], function (XMLView, Controller, Fragment) {
    "use strict";

    // new Button({
    //     text: "Click here"
    // }).placeAt("content");

    XMLView.create({
        viewName: "com.ibm.assignment.view.Main"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    return Controller.extend("com.ibm.assignment.controller.Main", {
        onButtonClick: function () {
            var oView = this.getView();
            // Create a SimpleForm
            Fragment.load({
                id: oView.getId(),
                name: "com.ibm.assignment.view.SimpleForm",
                controller: this
            }).then(function (oFragment) {
                oView.addDependent(oFragment);
                oFragment.open();
            })
        },
        onCloseDialog: function () {
            this.getView().byId("simpleFormDialog").close();
        }
    });
});
