// Variables
// let ham1 = document.getElementById("ham1");
// let ham2 = document.getElementById("ham2");
// let ham3 = document.getElementById("ham3");
let hamburgerMenu = document.getElementById("hamburger");
let expand = document.getElementById("expanded-nav");
var useHam = window.matchMedia("(min-width: 768px)");
let body = document.querySelector("body").width;




hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("change");
        expand.classList.toggle("exp");
});



