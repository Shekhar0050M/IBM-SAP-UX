sap.ui.define([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/mvc/Controller",
    "sap/m/Button"
], function (XMLView, Controller, Button) {
    "use strict";
    return Controller.extend("Assignment_2.Controller.Main", {
        onInit: function () {
            var oXMLView = XMLView.create({
                viewName: "Assignment.View.Main"
            });
            oXMLView.placeAt("content");
        }
    });
});