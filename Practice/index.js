sap.ui.define([
    'sap/m/Button'
], function (Button) {
    'use strict';
    var oButtonOne = new Button({
        text: 'Click me!'
    });
    oButtonOne.placeAt('content');
    var oButtonTwo = new Button({
        text: 'Show Button'
    });
    oButtonTwo.placeAt('content');
});


sap.ui.define([
    "sap/m/MessageBox",
    "sap/ui/core/format/DateFormat",
], function (MessageBox, DateFormat) {
    'use strict';
    return {
        showDate: function (oDate) {
            var oDateInstance = DateFormat.getDateInstance();
            var sDate = oDateInstance.format(oDate);
            MessageBox.show(sDate, {
                title: "Today's Date",
            });
        },
    };
});

sap.ui.define([
    "sap/m/messageBox",
    "sap/ui/core/mvc/Controller",
], function (Button, Controller) {
    "use strict";
    return Controller.extend("com.ui5learners.library.Main", {
        onInit: function () {
            console.log("Controller onInit");
            var oButton = new Button({
                text: "Click me",
            });
            return oButton;
        },
        onBeforeRendering: function () {
            console.log("Controller onBeforeRendering");
        },
        onAfterRendering: function () {
            console.log("Controller onAfterRendering");
        },
        onExit: function () {
            console.log("Controller onExit");
        },
        onButtonClick: function() {
            console.log("Button Clicked!");
        }
    });
});