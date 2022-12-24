let hour9 = $('#9');
let hour10 = $('#10');
let hour11 = $('#11');
let hour12 = $('#12');
let hour1 = $('#1');
let hour2 = $('#2');
let hour3 = $('#3');
let hour4 = $('#4');
let hour5 = $("#5")
let time = moment();

function setPlanner() {
    $("currentDay").text(moment().format("dddd, MMMM, Do YYYY"));
    $("time-block").each(function() {
        let id = $(this).attr("id");
        let schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children('.schedule').val(schedule);
        }
    
});

}
// Adding date and time in real-time
`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

setPlanner();
var saveButton = $(".saveBtn");
console.log (saveButton);

saveButton.on('click', function(){
    let time =$(this).parent().attr('id');
    let schedule = $(this).siblings('.schedule').val();
    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    hour = 9
    hour = 10
    hour = 11
    hour = 12
    hour = 13
    $('.time-block input').each(function () {
        let thisHour = parseInt($(this).attr('id'));
        console.log({thisHour,hour, id:$(this).attr('id')})

        if (thisHour > hour) {
            $(this).addClass('future');
        }
        else if (thisHour === hour) {
            $(this).addClass('present');
        
        }
        else {
            $(this).addClass('past');
        
        }
    })
}
pastPresentFuture();