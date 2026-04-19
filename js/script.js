// Form Validation JavaScript for Amber Mottova Project

function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const password = document.forms["myForm"]["password"].value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.innerHTML = ""; // Clear previous error messages

    if (name == "") {
        errorMessage.innerHTML += "Name must be filled out.\n";
    }

    if (email == "" || !validateEmail(email)) {
        errorMessage.innerHTML += "Valid email must be filled out.\n";
    }

    if (password.length < 6) {
        errorMessage.innerHTML += "Password must be at least 6 characters long.\n";
    }

    if (errorMessage.innerHTML != "") {
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Example Usage:
// Attach the validateForm function to the form's onsubmit event in your HTML.
// <form name="myForm" onsubmit="return validateForm()">
// </form>
