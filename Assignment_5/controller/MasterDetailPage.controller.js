sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (JSONModel, Controller) {
    "use strict";
    return Controller.extend("com.ibm.application.controller.MasterDetailPage", {
        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("./com/ibm/application/products.json", {}, false); // Set async to false for simplicity
            console.log("Model Data:", oModel.getData());
            this.getView().setModel(oModel, "products");
        },
        onClick: function () {
            alert("Hello");
        }
    });
});