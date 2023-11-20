sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.ui5learners.controller.Main", {
      onInit: function() {
        console.log("Form initialised.")
      },
  
      onSubmit: function() {
        // Handle form submission
        alert("Form submitted!");
      }
    });
  });
  