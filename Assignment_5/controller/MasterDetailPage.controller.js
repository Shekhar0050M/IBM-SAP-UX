sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.ibm.application.controller.MasterDetailPage", {
        onInit: function () {

            const oData = {
                recipient: {
                    name: "World"
                }
            };
            // const oModel = new JSONModel(oData);
            const oModel = new JSONModel(sap.ui.require.toUrl("com/ibm/application/products.json"));
            this.getView().setModel(oModel, "products");
        }
    });
});
//Keep in mind about how to align things in function()