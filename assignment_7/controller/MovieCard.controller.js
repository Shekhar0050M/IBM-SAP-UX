sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.ibm.assignment.controller.MovieCard", {
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("com/ibm/assignment/movie.json"));
            this.getView().setModel(oModel, "movies");
        },
           
    });
});