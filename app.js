const form = document.querySelector("#form");                                                                                                                                                               
const FirstName = document.querySelector("#name");
const LastName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

function validateForm() {
    if (FirstName.value === "") {
        message.textContent = "Please fill the Firstname field"
        message.style.color = "red";
        return;
    } 
    if (LastName.value === "") {
        message.textContent = "Please fill the Lastname field"
        message.style.color = "red";
        return;
    } 
    if (email.value === "") {
        message.textContent = "Please fill the email field"
        message.style.color = "red";
        return;
    
        
    } 
    // if (phone.value === 0) {
    //     message.textContent = "Please fill the phone field"
    //     message.style.color = "red";
    //     return;
    // } 
    if (password.value === "") {
        message.textContent = "Please fill the password field"
        message.style.color = "red";
        return;
    } 
    // message.textContent = "SignUp Success";
    // message.style.color = "green";
    alert("sign up success")

}

function getFormData(event) {
    event.preventDefault();

    // Form Validation
    validateForm();
}

// Event Listener

    form.addEventListener("submit" , getFormData);




