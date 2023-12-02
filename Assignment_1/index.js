sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageBox"
], function (Button, MessageBox) {
    "use script";
    var oButton = new Button({
        text: "Button"
    });
    oButton.placeAt("content");
});

sap.ui.require([
    "sap/m/Button",
    "sap/m/MessageBox"
], function (Button, MessageBox) {
    "use script";
    var oButton = new Button({
        text: "Button"
    });
    oButton.placeAt("content");
});