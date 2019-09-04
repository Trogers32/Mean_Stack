
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)

$("#bar").click( function() {
    $.get("https://anapioficeandfire.com/api/houses/17", function (data) {
        $("#house").html(data.name);
        $("#house").append("<p>" + data.words + "</p>");
        $("#house").append("<p>" + data.titles + "</p>");
    });
});
$("#lan").click( function() {
    $.get("https://anapioficeandfire.com/api/houses/229", function (data) {
        $("#house").html(data.name);
        $("#house").append("<p>" + data.words + "</p>");
        $("#house").append("<p>" + data.titles + "</p>");
    });
});
$("#sta").click( function() {
    $.get("https://anapioficeandfire.com/api/houses/362", function (data) {
        $("#house").html(data.name);
        $("#house").append("<p>" + data.words + "</p>");
        $("#house").append("<p>" + data.titles + "</p>");
    });
});
$("#tar").click( function() {
    $.get("https://anapioficeandfire.com/api/houses/378", function (data) {
        $("#house").html(data.name);
        $("#house").append("<p>" + data.words + "</p>");
        $("#house").append("<p>" + data.titles + "</p>");
    });
});