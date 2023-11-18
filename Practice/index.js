sap.ui.define([
    'sap/m/Button'
], function (Button) {
    'use strict';
    new Button({
        text: 'Click me!'
    }).placeAt('content');
});