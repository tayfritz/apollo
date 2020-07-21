// Global variables
var countdownDate = new Date(prompt("When is your event?")).getTime(); 
var timer = document.getElementById("timer");
var hideTimer = document.getElementById("hide-timer");
var banner = document.getElementById("banner-header");
let endTimerMessage = document.createElement("p");
let timerLocation = document.getElementsByTagName("main");

// Conditional logic to prompt user to provide a date or to 'cancel' which will hide timer div
if (countdownDate === null  || countdownDate == "") {
    timer.style.display = "none";
}
                // } else if (countdownDate.value === undefined) {
                //     alert("You must provide a date or press 'cancel");

                // }

                // if (countdownDate === "") {
                //     alert("You must provide a date or press 'cancel'");
                // }


// Timer function will countdown time remaining from the user's input date from current day
var myfunc = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countdownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = "Days: " + days
    document.getElementById("hours").innerHTML = "Hours: " + hours 
    document.getElementById("mins").innerHTML = "Minutes: " + minutes 
    document.getElementById("secs").innerHTML = "Seconds: " + seconds

    if (timeLeft < .1) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
    } 
    
    if (timeLeft < 1) {
        endTimerMessage.textContent = "HAPPY WEDDING DAY!";
        timer.appendChild(endTimerMessage);
        // hideTimer.textContent = "Reset Timer";
    }

}, 1000)


// Hide's timer div when user clicks on 'Hide Timer'
hideTimer.addEventListener("click", () => {
    timer.style.display = "none";
});
