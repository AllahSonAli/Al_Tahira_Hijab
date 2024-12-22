// Function to handle registration form (in index.html)
document.querySelector("#register form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Simulate user registration
    console.log("User Registered:");
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    // Confirmation message
    alert("Registration successful!");
    document.querySelector("#register form").reset();
});

// Function to handle login form (in login.html)
document.querySelector("#login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get login data
    const email = document.querySelector("#email-login").value;
    const password = document.querySelector("#password-login").value;

    // Simulate login check
    console.log("User Logged In:");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    // Confirmation message
    alert("Login successful!");
    document.querySelector("#login-form").reset();
});

// Set the hijab image as the background dynamically (for homepage)
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundImage = "url('images/h3.jpg')"; // Correct relative path to the image
    document.body.style.backgroundSize = "100";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundAttachment = "fixed";
});

// Change background image functionality (for homepage)
document.addEventListener("DOMContentLoaded", function () {
    const changeBgButton = document.getElementById('change-bg-btn');

    // Event listener for button click to change background
    if (changeBgButton) {
        changeBgButton.addEventListener("click", function () {
            document.body.style.backgroundImage = "url('images/h3.jpg')"; // Correct relative path
            alert("Background changed!");
        });
    }
});
