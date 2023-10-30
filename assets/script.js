// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var localeSettings = {};
dayjs.locale(localeSettings);

$(function () {
    //current hour of the day using dayjs library
    var currentHour = dayjs().format("H");
    //As time moves on each row will change color in the timeline. Past=gray, present=red, future=green
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
    //user will click the save button after they type in their task
    function userTask () {
        $(".saveBtn").on("click", function() {
            var key = $(this).parent().attr("id");
            var value= $(this).siblings(".description").val();
            localStorage.setItem(key, value);
        });
    }
    //user input from local storage and set text area values
    $(".time-block").each(function() {
        var key = $(this).attr("id");
        var value = localStorage.getItem(key);
        $(this).children(".description").val(value);
    });
    //will show the current date in the header while using the application 
    function currentDate() {
        var date = $("#date");
        var currentDate = dayjs().format("dddd, MMMM D, YYYY");
        date.text(currentDate);
    }
    //calling the functions
    timeline();
    userTask();
    setInterval(currentDate, 1000);
});

