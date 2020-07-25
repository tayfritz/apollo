// Variables
// let ham1 = document.getElementById("ham1");
// let ham2 = document.getElementById("ham2");
// let ham3 = document.getElementById("ham3");
let hamburgerMenu = document.getElementById("hamburger");
let expand = document.getElementById("expanded-nav");
let intFrameWidth = window.innerWidth;


function onClickMenu() { 
        document.getElementById("hamburger").classList.toggle("change");
        document.getElementById("expanded-nav").classList.toggle("exp");
        if (expand.style.display === "block") {
            expand.style.display = "none";
        } else {
            expand.style.display = "block";
        }
}  

