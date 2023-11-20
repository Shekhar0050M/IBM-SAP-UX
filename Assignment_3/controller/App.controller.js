sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("com.ui5learners.controller.Main", {
      onInit: function() {
        // Controller initialization logic
      },
  
      onSubmit: function() {
        // Handle form submission
        alert("Form submitted!");
      }
    });
  });
  