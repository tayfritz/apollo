let signup = document.querySelector("press");
let fname = document.querySelector("fname");
let lname = document.querySelector("lname");
let email = document.querySelector("email");
let role = document.querySelector("role");


function validate() {
    if (document.forms.fname.value == "") {
        alert('Please provide your name');
        document.forms.fname.focus();
        return false;
    }
}