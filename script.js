

console.log(dayjs())

// Declare variables
var saveBtn = $("button").addClass("saveBtn")



$( document ).ready(function(){

    // Grab the current date from Dayjs

    var currentDay = dayjs().format('dddd MMMM DD, YYYY');
    console.log(currentDay);

    // Display the current date on the HTML page

    $("#currentDay").text(currentDay)
    
    // Color code the time blocks to indicate whether it is in the past, present or future


    var currentHour = parseInt(dayjs().hour());
    console.log(currentHour);

    
    // Create an Array to enter the data attributes of the timeblocks    
    
    // for loop to check IF it's present, past or future and change the class taking into consideration the status



    // create an event listener to the saveButton to save in local storage the saved task

    //Check when i refresh the page the tasks remains displayed


    




   

    


    

    
    

    











 
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future


//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
//```




})




