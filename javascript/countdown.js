// Global variables
flatpickr("#flatpickr", {});

var timer = document.getElementById("timer");
var banner = document.getElementById("banner-header");
let actionButton = document.getElementById("action-button");
const userInput = document.querySelector("#flatpickr");
let eventDate;
let hideTimer = document.createElement("button");
hideTimer.className = "hide-timer";
hideTimer.textContent = "HIDE TIMER";

// Event Listeners
actionButton.addEventListener("click", () => {
    if (userInput.value === undefined || userInput.value === null || userInput.value === "" ) {
        banner.textContent = "Sorry, we didn't quite get that. Please select a date below to get time remaining until your event!";
    } else {
        eventDate = new Date(userInput.value).getTime();
        getTimeRemaining();
    }
});

hideTimer.addEventListener("click", () => {
    timer.style.display = "none";
});

// // Functions

function getTimeRemaining() {
    var myfunc = setInterval(function() {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        banner.textContent = "TIME REMAINING UNTIL YOUR EVENT:"
        document.getElementById("days").innerHTML = "Days: " + days
        document.getElementById("hours").innerHTML = "Hours: " + hours 
        document.getElementById("mins").innerHTML = "Minutes: " + minutes 
        document.getElementById("secs").innerHTML = "Seconds: " + seconds
        timer.appendChild(hideTimer);

        if (timeLeft < .1) {
            clearInterval(myfunc);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = "" 
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""
        } 

        if (timeLeft < 1) {
            banner.textContent = "HAPPY WEDDING DAY!";
            userInput.style.display = "none";
            actionButton.style.display = "none";
            hideTimer.style.display = "none";
        }

    }, 1000)
}