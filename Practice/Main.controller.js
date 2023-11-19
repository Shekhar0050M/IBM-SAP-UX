// sap.ui.define([
//     'sap/m/Button'
// ], function (Button) {
//     'use strict';
//     var oButtonOne = new Button({
//         text: 'Click me!'
//     });
//     oButtonOne.placeAt('content');
//     var oButtonTwo = new Button({
//         text: 'Show Button'
//     });
//     oButtonTwo.placeAt('content');
// });


// sap.ui.define([
//     "sap/m/MessageBox",
//     "sap/ui/core/format/DateFormat",
// ], function (MessageBox, DateFormat) {
//     'use strict';
//     return {
//         showDate: function (oDate) {
//             var oDateInstance = DateFormat.getDateInstance();
//             var sDate = oDateInstance.format(oDate);
//             MessageBox.show(sDate, {
//                 title: "Today's Date",
//             });
//         },
//     };
// });

sap.ui.define([
    "sap/m/Button",
    "sap/ui/core/mvc/Controller"
], function (Button, Controller) {
    "use strict";
    // var oButton = new Button({
    //     text: "Click here"
    // });
    // oButton.placeAt("content");
    // return Controller.extend("com.ui5learners.library.Main", {
    //     onInit: function () { 
    //         console.log("Start");
    //     },
    //     onBeforeRendering: function () { },
    //     onAfterRendering: function () { },
    //     onExit: function () { },
    // });
    return Controller.extend("com.ui5learners.library.Main" , {
        onInit: function() {
            console.log("Start");
        }
    });
});