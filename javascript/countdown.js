

// Global variables
var countdownDate;
var timer = document.getElementById("timer");
var hideTimer = document.getElementById("hide-timer");
var banner = document.getElementById("banner-header");
var bannerText = document.createElement("p");
bannerText.textContent = "Time Remaining Untill Your Event:";
let endTimerMessage = document.createElement("p");
let timerLocation = document.getElementsByTagName("main");

// Functions
function userInput(question) {
    countdownDate = new Date(prompt(question)).getTime(); 
}

function getTimeRemaining() {
    var myfunc = setInterval(function() {
        let now = new Date().getTime();
        let timeLeft = countdownDate- now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        banner.appendChild(bannerText);
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
            bannerText.textContent = "HAPPY WEDDING DAY!";
            timer.appendChild(endTimerMessage);
            hideTimer.style.display = "none";
        }

    }, 1000)
}

userInput("When is your event?");

if (countdownDate === null  || countdownDate == "") {
        timer.style.display = "none";
} else if (isNaN(countdownDate)) {
    userInput("Please provide a date or select 'Cancel'");
    if (isNaN(userInput)) {
        getTimeRemaining();
    } 
} else {
    getTimeRemaining();
}

// Event Listeners
// Hide's timer div when user clicks on 'Hide Timer'
// hideTimer.addEventListener("click", () => {
//     timer.style.display = "none";
// });


console.log(flatpickr("#flatpickr", {}));
