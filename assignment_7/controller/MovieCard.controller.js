sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], function (Controller, JSONModel, Fragment) {
    "use strict";
    return Controller.extend("com.ibm.assignment.controller.MovieCard", {
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("com/ibm/assignment/movie.json"));
            this.getView().setModel(oModel, "movies");
        },
        bookTickets: function () {
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