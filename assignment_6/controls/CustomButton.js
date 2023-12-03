// CustomButton.js
sap.ui.define([
    "sap/m/Button",
    "sap/ui/core/Control"
], function (Button, Control) {
    "use strict";

    var CustomButton = Button.extend("com.ibm.assignment.controls.CustomButton", {
        metadata: {
            properties: {
                // Define custom properties if needed
            }
        },

        renderer: function (oRm, oButton) {
            oRm.write("<div");
            oRm.writeControlData(oButton);
            oRm.addClass("customButtonClass");
            oRm.writeClasses();
            oRm.write(" onmouseover=\"this.style.backgroundColor='lightcoral'\"");
            oRm.write(" onmouseout=\"this.style.backgroundColor='lightblue'\"");
            oRm.write(">");

            // Render button text
            oRm.writeEscaped(oButton.getText());

            oRm.write("</div>");
        },
    });

    Control.extend("com.ibm.assignment.controls.CustomButton", {
        metadata: {
            aggregations: {
                // Define aggregations if needed
            }
        }
    });

    return CustomButton;
});