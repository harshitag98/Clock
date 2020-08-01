// get the time elements
let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');
let timeType = document.getElementById('time');
let dayDate = document.getElementById('date');

let date = new Date().toDateString();
dayDate.innerHTML = date;

calculateTime();

// function to calculate time and date
function calculateTime(){

    // Get the current Date
    let time = new Date();

    // Extract hour, minute, second from the date
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();  
    let type = "";  
    
    // Convert 24-hour clock to AM/PM clock and chosing it according to the time of day
    if(hours < 12){
        type = "AM";
    }
    else{
        type = "PM"
    }

    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    
    // Pad 0 if minutes is single digit
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    // Pad 0 if seconds is single digit
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    hrs.innerText = hours;;
    mins.innerHTML = minutes;;
    secs.innerHTML = seconds;
    timeType.innerHTML = type;
}

setInterval(calculateTime, 1000);