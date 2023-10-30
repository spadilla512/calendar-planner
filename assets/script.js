// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var localeSettings = {};
dayjs.locale(localeSettings);

$(function () {
    var currentHour = dayjs().format("H");

    function timeline() {
        $(".time-block").each(function() {
            var rowTime = parseInt(this.id);

            if (rowTime < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (rowTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    function userTask () {
        $(".saveBtn").on("click", function() {
            var key = $(this).parent().attr("id");
            var value= $(this).siblings(".description").val();
            localStorage.setItem(key, value);
        });
    }

    $(".time-block").each(function() {
        var key = $(this).attr("id");
        var value = localStorage.getItem(key);
        $(this).children(".description").val(value);
    });

    function currentTime() {
        var date = $("#date");
        var currentDate = dayjs().format("dddd, MMMM D, YYYY");
        date.text(currentDate);
    }

    timeline();
    userTask();
    setInterval(currentTime, 1000);
});

