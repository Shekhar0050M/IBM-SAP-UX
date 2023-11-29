sap.ui.define([
    "sap/m/Button",
], function (Button) {
    "use strict";

    return Button.extend("your.namespace.CustomButton", {
        metadata: {
            events: {
                customhover: {},
            },
        },

        onmouseover: function () {
            this.fireCustomhover();
        },
    });
});
