sap.ui.define([
    "sap/m/Button",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/core/mvc/JSONView"
], function (Button, XMLView, JSONView) {
    "use strict";
    new Button({
        text: "Click me JS"
    }).placeAt("content");
    XMLView.create({
        viewName: "com.ibm.application.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    JSONView.create({
        viewName: "com.ibm.application.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
});