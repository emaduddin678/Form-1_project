const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmation");

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
 
// Email validation
function isValidEmail(input){
    // String(email).toLowerCase();
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(input.value === ""){
        showError(input, "Email is required");
    }
    else if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, "Email is not valid");
    }
    // return re.test(email);  
}
// Email Validation complete 

// Check checkRequired
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            // showError(input, `${input.id} is required`);
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}
// Get Field name ?
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// username length 
function usernameLength(input, min, max){
    if(input.value === ""){
        showError(input, `${getFieldName(input)} is required`);
    }else if(input.value.length < min){
        showError(input,  `${getFieldName(input)} must be ${min} character`);
    }else if(input.value.length > max){
        showError(input,  `${getFieldName(input)} must be ${max} character`);
    }
}
function passwordLength(input, min, max){
    if(input.value === ""){
        showError(input, `${getFieldName(input)} is required`);
    }else if(input.value.length < min){
        showError(input,  `${getFieldName(input)} must be ${min} character`);
    }else if(input.value.length > max){
        showError(input,  `${getFieldName(input)} must be ${max} character`);
    }
}
// Check password match 
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}



// Event Listener 
form.addEventListener('submit', function(event){
    event.preventDefault();

    // if(username.value === ""){
    //     showError(username, 'Username is requred');
    // } else{
    //     showSuccess(username);
    // }

    // if(email.value === ""){
    //     showError(email, 'Email is requred');
    // } else if(!isValidEmail(email.value)) {
    //     showError(email, 'Email is not Valid');
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value === ""){
    //     showError(password, 'password is requred');
    // } else{
    //     showSuccess(password);
    // }

    // if(password2.value === ""){
    //     showError(password2, 'Confirmation required');
    // } else{
    //     showSuccess(password2);
    // }

    checkRequired([username, email, password, password2]);
    usernameLength(username, 4, 12);
    passwordLength(password, 8, 16);
    isValidEmail(email);
    checkPasswordMatch(password, password2);

})

// document.querySelectorAll("h2")[1].addEventListener("click", myFunc);
// function myFunc(){
//     document.body.style.backgroundColor = "Green";
// }
