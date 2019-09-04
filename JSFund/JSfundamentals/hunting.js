

// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
    $("div").append(data.login);
}
$("button").click( function() {
    $.get("https://api.github.com/users/trogers32", displayName);
});