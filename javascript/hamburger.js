
let hamburgerMenu = document.getElementById("hamburger");
let expand = document.getElementById("expanded-nav");



hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("change");
        expand.classList.toggle("exp");
});



