console.log(dayjs())
var saveBtn = $("button").addClass("saveBtn")

$( document ).ready(function(){

    // Grab the current date from Dayjs

    var currentDay = dayjs().format('dddd MMMM DD, YYYY');
    console.log(currentDay);

    // Display the current date on the HTML page

    $("#currentDay").text(currentDay)
    
     // create an event listener to the saveButton to save in local storage the saved task

    saveBtn.on("click", function(){
        var textInput = $("textarea").text();
        console.log(textInput);
        







       




    })

    // Color code the time blocks to indicate whether it is in the past, present or future

    var currentHour = parseInt(dayjs().hour());
    console.log(currentHour);
    
    


    var time9 = $("#time1").data("number")
    console.log(time9)
    

     if (time9 < currentHour) {
               $("#textArea1").addClass("past");    
                
            }
    
            else if (time9 > currentHour) {
                $("#textArea1").addClass("future"); 
                
            }
            else {
                $("#textArea1").addClass("present"); 
            }


    var time10 = $("#time2").data("number")
    console.log(time10)

    if (time10 < currentHour) {
        $("#textArea2").addClass("past");    
         
     }

     else if (time10 > currentHour) {
         $("#textArea2").addClass("future"); 
         
     }
     else {
         $("#textArea2").addClass("present"); 
     }



    var time11 = $("#time3").data("number")
    console.log(time11)

    if (time11 < currentHour) {
        $("#textArea3").addClass("past");    
         
     }

     else if (time11 > currentHour) {
         $("#textArea3").addClass("future"); 
         
     }
     else {
         $("#textArea3").addClass("present"); 
     }

    var time12 = $("#time4").data("number")
    console.log(time12)

    if (time12 < currentHour) {
        $("#textArea4").addClass("past");    
         
     }

     else if (time12 > currentHour) {
         $("#textArea4").addClass("future"); 
         
     }
     else {
         $("#textArea4").addClass("present"); 
     }

    var time13 = $("#time5").data("number")
    console.log(time13)

    if (time13 < currentHour) {
        $("#textArea5").addClass("past");    
         
     }

     else if (time13 > currentHour) {
         $("#textArea5").addClass("future"); 
         
     }
     else {
         $("#textArea13").addClass("present"); 
     }

    var time14 = $("#time6").data("number")
    console.log(time14)

    if (time14 < currentHour) {
        $("#textArea6").addClass("past");    
         
     }

     else if (time14 > currentHour) {
         $("#textArea6").addClass("future"); 
         
     }
     else {
         $("#textArea6").addClass("present"); 
     }

    var time15 = $("#time7").data("number")
    console.log(time15)

    if (time15 < currentHour) {
        $("#textArea7").addClass("past");    
         
     }

     else if (time15 > currentHour) {
         $("#textArea7").addClass("future"); 
         
     }
     else {
         $("#textArea7").addClass("present"); 
     }

    var time16 = $("#time8").data("number")
    console.log(time16)

    if (time16 < currentHour) {
        $("#textArea8").addClass("past");    
         
     }

     else if (time16 > currentHour) {
         $("#textArea8").addClass("future"); 
         
     }
     else {
         $("#textArea8").addClass("present"); 
     }

    var time17 = $("#time9").data("number")
    console.log(time17)

    if (time17 < currentHour) {
        $("#textArea9").addClass("past");    
         
     }

     else if (time17 > currentHour) {
         $("#textArea9").addClass("future"); 
         
     }
     else {
         $("#textArea9").addClass("present"); 
     }


    
    
      

      })
   
      
    


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




//})




