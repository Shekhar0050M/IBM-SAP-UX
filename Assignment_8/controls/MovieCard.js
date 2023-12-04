sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";

    return Control.extend("com.ibm.assignment.controls.MovieCard", {
        metadata: {
            properties: {
                "title": { type: "string", defaultValue: "" },
                "year": { type: "int", defaultValue: 0 },
                "genres": { type: "string[]", defaultValue: [] },
                "extract": { type: "string", defaultValue: "" },
                "thumbnail": { type: "string", defaultValue: "" },
                "thumbnailWidth": { type: "int", defaultValue: 0 },
                "thumbnailHeight": { type: "int", defaultValue: 0 }
            }
        },

        renderer: function (oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.writeClasses();
            oRm.write(">");

            // Render title
            oRm.write("<h2>");
            oRm.writeEscaped(oControl.getTitle());
            oRm.write("</h2>");

            // Render year
            oRm.write("<p>");
            oRm.writeEscaped("Year: " + oControl.getYear());
            oRm.write("</p>");

            // Render genres
            oRm.write("<p>");
            oRm.writeEscaped("Genres: " + oControl.getGenres().join(", "));
            oRm.write("</p>");

            // Render extract
            oRm.write("<p>");
            oRm.writeEscaped(oControl.getExtract());
            oRm.write("</p>");

            // Render thumbnail image
            oRm.write("<img");
            oRm.writeAttributeEscaped("src", oControl.getThumbnail());
            oRm.writeAttribute("alt", "Movie Thumbnail");
            oRm.writeAttribute("width", oControl.getThumbnailWidth() + "px");
            oRm.writeAttribute("height", oControl.getThumbnailHeight() + "px");
            oRm.write("/>");

            oRm.write("</div>");
        }
    });
});
