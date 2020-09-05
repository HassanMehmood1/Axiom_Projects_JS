const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//All Functions 

//Functions to show errors
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};
//function to show Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};
//Function to check if email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
// Functions to check if required field have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value===''){
            showError(input,`${getFieldId(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
};
//Functions to get the id of the input field with proper case
function getFieldId(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
};

// this is an event listener for the form on 
form.addEventListener('submit',function( e){
    e.preventDefault();
   checkRequired([username,email, password,password2])
});
