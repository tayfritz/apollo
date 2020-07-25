// Variables
// let ham1 = document.getElementById("ham1");
// let ham2 = document.getElementById("ham2");
// let ham3 = document.getElementById("ham3");
let hamburgerMenu = document.getElementById("hamburger");
let expand = document.getElementById("expanded-nav");

function onClickMenu() {
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("expanded-nav").classList.toggle("exp");
    if (expand.style.display === "block") {
        expand.style.display = "none";
    } else {
        expand.style.display = "block";
    }
}


// Event Listeners
// hamburgerMenu.addEventListener("click", () => {
//     ham1.style.display = "none";
//     ham2.style.transform = "rotate(60deg)";
//     ham3.style.transform = "rotate(-60deg)";
// });

//  transform: rotate(180deg);