
const form = document.getElementById("myForm");
const usernameInput = document.getElementById("username");
const submitBtn = document.getElementById("submitBtn");
alert("Username validation passed!");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (username.length >= 5 && alphanumericRegex.test(username)) {
        alert("Username validation passed!");
    } else {
        alert("Username must be at least 5 characters long and contain only alphanumeric characters (letters and numbers).");
    }
});



