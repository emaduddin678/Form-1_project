const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error message 
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
 


// Event Listener 
form.addEventListener('submit', function(event){
    event.preventDefault();

    if(username.value === ""){
        showError(username, 'Username is requred');
    } else{
        showSuccess(username);
    }

    if(email.value === ""){
        showError(email, 'Email is requred');
    } else{
        showSuccess(email);
    }

    if(password.value === ""){
        showError(password, 'password is requred');
    } else{
        showSuccess(password);
    }

    if(password2.value === ""){
        showError(password2, 'Confirmation required');
    } else{
        showSuccess(password2);
    }


})

// document.querySelectorAll("h2")[1].addEventListener("click", myFunc);
// function myFunc(){
//     document.body.style.backgroundColor = "Green";
// }

