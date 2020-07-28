// let signup = document.getElementById("press");
let fname = document.getElementById("first_name");
let lname = document.getElementById("last_name");
let email = document.getElementById("user_email");
let role = document.getElementById("user_role"); 
let myForm = document.getElementById("myForm");

function onClick() {
    let fname = document.getElementById("first_name");
    let lname = document.getElementById("last_name");
    let email = document.getElementById("user_email");
    let role = document.getElementById("user_role"); 
    
    if (fname.value == "") {
        alert("You must provide a first name");
        fname.focus()
    }

    if (lname.value == "") {
        alert("You must provide a last name");
    }

    if (email.value == "") {
        alert("You must provide an email.");
    } 

    if (role.value == "") {
        alert("Please select your role from the drop down menu so we can best serve your needs.");
    }
}

function checkEmail() {
    let email = document.getElementById("user_email");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true);
    } else {
        alert("Please provide a valid email address.");
        return (false);
    }
}

