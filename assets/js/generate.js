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

//  function to display date and time at top of page Adding date and time in real-time
// need to correspond time with the entries and save into local storage
`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
 setInterval(refreshTime, 1000);

// function 
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
// Need key and value for localStorage
setPlanner();
var saveButton = $(".saveBtn");
console.log (saveButton);

saveButton.on('click', function(){
    // Added console.log to verify save functionality
    console.log("Saving");
    let time =$(this).siblings('.description').attr('id');
    console.log(time)
    let schedule = $(this).siblings('.description').val();
    console.log(schedule);
    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    $('.time-block input').each(function () {
        let thisHour = parseInt($(this).attr('id'));
        console.log({thisHour,hour, id:$(this).attr('id')})
// Need to add color change for past and present
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
// Add clear my schedule function and add listeners for the click event
       
    $("#scheduleClear").click(function() {
        localStorage.clear();
        location.reload();
    }); 
      

    
pastPresentFuture();