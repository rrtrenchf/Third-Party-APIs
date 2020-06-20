
//DOMs
var timeEl=document.getElementById("timeblock");
var inputEl=document.getElementById("eventInput");
var saveEl=document.getElementById("savebtn");
var currentDayEl=document.getElementById("currentDay")

//create input text box as a global function
// saveEl.addEventlistener("click")
// const inputEl = $("#eventInput").val();
// localStorage.setItem("input",inputEl )

currentDayEl.innerHTML=(moment().format('MMMM Do YYYY, h:mm a'));

$("textarea").each(function(){
    var hour = $(this).attr("id")
    var currentHour=moment().format ("H")
   hour=parseInt(hour)
   currentHour=parseInt(currentHour)
    if (hour===currentHour){
        $(this).addClass("present")

    }else if (hour<currentHour){
        $(this).addClass("past")

    }else if(hour>currentHour){
        $(this).addClass("future")
        //textarea value stored in hour. Able to get from local storage in this loop.
       
        

    }

    
    console.log(hour,currentHour)
})


$(".savebtn").on("click",function(event){
    event.preventDefault()
    $(this).siblings("textarea")
    var textarea = $(this).siblings("textarea")
    localStorage.setItem(textarea.attr("id"),textarea.val())
    JSON.parse(localStorage.getItem(hour,textarea.val()))
   

   
})

// display current time
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));



