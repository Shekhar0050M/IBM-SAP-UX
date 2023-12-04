sap.ui.define([
    "sap/m/ListBase",
    "com/ibm/assignment/controls/MovieCard"
], function (ListBase, MovieCard) {
    "use strict";

    var CustomList = ListBase.extend("com.ibm.assignment.controls.CustomList", {
        metadata: {
            aggregations: {
                items: { type: "com.ibm.assignment.controls.MovieCard", multiple: true, singularName: "item" }
            }
        },

        renderer: {
            renderAggregation: function (oRm, oControl, sAggregationName) {
                if (sAggregationName === "items") {
                    oControl.getItems().forEach(function (oItem) {
                        oRm.renderControl(oItem);
                    });
                } else {
                    ListBaseRenderer.renderAggregation.apply(this, arguments);
                }
            }
        }
    });

    return CustomList;
});
