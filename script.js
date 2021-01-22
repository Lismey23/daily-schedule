

console.log(dayjs())

$( document ).ready(function(){

    // Grab the current date from Dayjs
    
    var currentDay = dayjs().format('dddd MMMM DD');
    console.log(currentDay);

    // Display the current date on the HTML page

    $("#currentDay").text(currentDay)
    

})



//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
//```