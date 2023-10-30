// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

$("#currentDay").text(moment().format("dddd, MMM DD, YYYY - h:mm:ss a"));

    $("saveBtn").on("click", function() {
        var content = $(this).siblings(".description").val();
        var timeRecord = $(this).parent().attr("id");

        localStorage.setItem(timeRecord, content);
    })

    $("#hour-9.description").val(localStorage.getItem("hour-9"));
    $("#hour-10.description").val(localStorage.getItem("hour-10"));
    $("#hour-11.description").val(localStorage.getItem("hour-11"));
    $("#hour-12.description").val(localStorage.getItem("hour-12"));
    $("#hour-13.description").val(localStorage.getItem("hour-13"));
    $("#hour-14.description").val(localStorage.getItem("hour-14"));
    $("#hour-15.description").val(localStorage.getItem("hour-15"));
    $("#hour-16.description").val(localStorage.getItem("hour-16"));
    $("#hour-17.description").val(localStorage.getItem("hour-17"));

    function timeline() {
        var Workhour = moment().hour();

        $(".time-block").each(function() {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < Workhour) {
                $(this).addClass("past");  
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (timeBlock === Workhour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
        timeline();
  });