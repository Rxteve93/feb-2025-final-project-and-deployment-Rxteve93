document.addEventListener("DOMContentLoaded", function() {
    console.log("Trapid Hub Blog Loaded!");

    

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields.";
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Message sent successfully!";
        this.reset(); // Clear the form
    }
});