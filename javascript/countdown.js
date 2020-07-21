var countdownDate = new Date(prompt("When is your event?")).getTime(); 
var timer = document.getElementById("timer");
var hideTimer = document.getElementById("hide-timer");
var banner = document.getElementById("banner-header");


// Hide's timer div when user clicks on 'Hide Timer'
hideTimer.addEventListener("click", () => {
    timer.style.display = "none";
});

// This does not work...
// if (countdownDate === "null" || countdownDate === " ") {
//     timer.style.display = "block";
// }

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

// This does not work either...
    // if (countdownDate === null) {
    //     var countdown = document.getElementById("countdown");
    //     countdown.style.display = "none";
    //     clearInterval(myfunc);
    // } else {}
        if (timeLeft < .01) {
            clearInterval(myfunc);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = "" 
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""
        } 
}, 1000)







// Add an additional message to the DOM when time runs out
// } else if (timeLeft === 0) {
    //     document.getElementById("message").innerHTML = "Happy Wedding Day!";