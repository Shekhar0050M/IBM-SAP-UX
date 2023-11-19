sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("Assignment_3.controller.Main", {
        onSubmit: function () {
            var oModel = this.getView().byId("userForm").getModel();
            var oFormData = oModel.getData();
            console.log("Submitted Data:", oFormData);
        }
    });
});