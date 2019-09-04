
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)

$("#q1").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=15", function (data) {
        console.log(data.results[0]);
        $("#q1").html(data.results[0].question);
        $("#q1").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q1").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q1").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q1").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q2").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=15", function (data) {
        console.log(data.results[0]);
        $("#q2").html(data.results[0].question);
        $("#q2").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q2").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q2").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q2").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q3").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=15", function (data) {
        console.log(data.results[0]);
        $("#q3").html(data.results[0].question);
        $("#q3").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q3").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q3").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q3").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q4").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=20", function (data) {
        console.log(data.results[0]);
        $("#q4").html(data.results[0].question);
        $("#q4").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q4").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q4").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q4").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q5").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=20", function (data) {
        console.log(data.results[0]);
        $("#q5").html(data.results[0].question);
        $("#q5").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q5").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q5").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q5").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q6").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=20", function (data) {
        console.log(data.results[0]);
        $("#q6").html(data.results[0].question);
        $("#q6").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q6").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q6").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q6").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q7").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=19", function (data) {
        console.log(data.results[0]);
        $("#q7").html(data.results[0].question);
        $("#q7").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q7").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q7").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q7").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q8").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=19", function (data) {
        console.log(data.results[0]);
        $("#q8").html(data.results[0].question);
        $("#q8").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q8").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q8").append(data.results[0].incorrect_answers[2] + '<br>');
        $("#q8").append(data.results[0].correct_answer + '<br>');
    });
});
$("#q9").click( function() {
    $.get("https://opentdb.com/api.php?amount=10&category=19", function (data) {
        console.log(data.results[0]);
        $("#q9").html(data.results[0].question);
        $("#q9").append('<br><br>' + data.results[0].incorrect_answers[0] + '<br>');
        $("#q9").append(data.results[0].correct_answer + '<br>');
        $("#q9").append(data.results[0].incorrect_answers[1] + '<br>');
        $("#q9").append(data.results[0].incorrect_answers[2] + '<br>');
    });
});