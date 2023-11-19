sap.ui.require([
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/Button",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/m/ColumnListItem"
], function (Table, XMLView, JSONModel, ColumnListItem, Column) {
    "use strict";
    XMLView.create({
        viewName: "Assignment_2.View.Main"
    }).then(function (oView) {
        oView.placeAt("content")
    });
    var oModel = new JSONModel({
        "employee": [
            {
                "Name": "Shekhar Suman",
                "Age": "22",
                "Gender": "Male",
                "Tone": "Brownish",
                "Height": "5.8",
                "Health": "Skinny"
            }
        ]
    });
    var oTable = new Table({
        columns: [
            new Column({ header: new Text({ text: "Name" }) }),
            new Column({ header: new Text({ text: "Age" }) }),
            new Column({ header: new Text({ text: "Gender" }) }),
            new Column({ header: new Text({ text: "Tone" }) }),
            new Column({ header: new Text({ text: "Height" }) }),
            new Column({ header: new Text({ text: "Health" }) })
        ]
    });

    var oTemplate = new ColumnListItem({
        cells: [
            new Text({ text: "Name" }),
            new Text({ text: "Age" }),
            new Text({ text: "Gender" }),
            new Text({ text: "Tone" }),
            new Text({ text: "Height" }),
            new Text({ text: "Health" }),
        ]
    });


    oTable.setModel(new JSONModel({
        rows: [
            { "Column1": "Value 1", "Column2": "Value 2", "Column2": "Value 2", "Column1": "Value 1", "Column2": "Value 2", "Column2": "Value 2" },
            { "Column1": "Value 1", "Column2": "Value 2", "Column2": "Value 2", "Column1": "Value 1", "Column2": "Value 2", "Column2": "Value 2" },
            { "Column1": "Value 1", "Column2": "Value 2", "Column2": "Value 2", "Column1": "Value 1", "Column2": "Value 2", "Column2": "Value 2" }
        ]
    }));
    oTable.bindItems("/rows", oTemplate);
    oTable.placeAt("tableContainer");
});
