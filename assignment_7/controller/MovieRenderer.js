sap.ui.define([], function () {
    "use strict";

    var MoviecardRenderer = {};

    MoviecardRenderer.render = function (oRm, oControl) {
        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addClass("yourMovieCardClass");
        oRm.writeClasses();
        oRm.write(">");

        oRm.write("<h2>" + oControl.getTitle() + "</h2>");
        oRm.write("<p>" + oControl.getDescription() + "</p>");
        oRm.write("<p>Rating: " + oControl.getRating() + "</p>");
        oRm.write("<p>Genre: " + oControl.getGenre() + "</p>");
        oRm.write("<p>Language: " + oControl.getLanguage() + "</p>");

        oRm.renderControl(oControl.getAggregation("bookButton"));

        oRm.write("</div>");
    };

    return MoviecardRenderer;
});
