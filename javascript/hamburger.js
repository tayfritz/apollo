// Variables
// let ham1 = document.getElementById("ham1");
// let ham2 = document.getElementById("ham2");
// let ham3 = document.getElementById("ham3");
let hamburgerMenu = document.getElementById("hamburger");
let expand = document.getElementById("expanded-nav");
var useHam = window.matchMedia("(min-width: 768px)");
let body = document.querySelector("body").width;




function onClickMenu() {
        document.getElementById("hamburger").classList.toggle("change");
        document.getElementById("expanded-nav").classList.toggle("exp");
        if (expand.style.display === "block") {
                expand.style.display = "none";
        } else {
                expand.style.display = "block";
        } 
}



