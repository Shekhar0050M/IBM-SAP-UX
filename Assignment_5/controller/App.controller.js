sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("your.app.namespace.Controller", {
        onListItemPress: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext();
            var sPath = oContext.getPath();
            var oProductDetailPanel = sap.ui.getCore().byId('productDetailPanel');
            oProductDetailPanel.bindElement({ path: sPath });
        }
    });
});
