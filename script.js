
const form = document.getElementById("myForm")
console.log("Form found:", form)

if (form) {
    form.addEventListener("submit", function(e){
        console.log("Form submit event triggered")
        e.preventDefault();
        getFormData(e.target)
    })
    console.log("Event listener added to form")
} else {
    console.error("Form not found!")
}

function getFormData(form){
    console.log("getFormData called with:", form)
    var formData = new FormData(form);
    const inputFormValues = Array.from(formData.values());
    console.log("Form values:", inputFormValues)
    const emailInput = inputFormValues[0]
    const passwordInput = inputFormValues[1]
    console.log("Email:", emailInput, "Password:", passwordInput)
    validateFormData(form,emailInput, passwordInput)
}

function validateEmailInput(emailInput) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailInput);
}

function validatePasswordLength(passwordInput){
    if(passwordInput.length==0){
        return false
    } else{
        return true
    }
}

function validatePasswordInput(passwordInput) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordPattern.test(passwordInput);
}

function validateFormData(form,emailInput, passwordInput){
    // Reset all validation messages and input styles first
    resetValidationStyles()
    
    let isEmailValid = validateEmailInput(emailInput)
    let isPasswordLengthValid = validatePasswordLength(passwordInput)
    let isPasswordValid = validatePasswordInput(passwordInput)
    
    if(!isEmailValid){
       notValidEmail()
    }
    
    if (!isPasswordLengthValid){
        notValidPasswordLength()
    } else if (!isPasswordValid){
        notValidPassword()
    }
   
    if(!isEmailValid || !isPasswordValid || !isPasswordLengthValid){
        showValidationDiv()
    } else{
        hideValidationDiv()
        console.log("form valid : submit triggered");
        form.submit()

    }
}

function showValidationDiv(){
    const validationDiv=document.getElementById("validationError")
    validationDiv.style.display="block"

}

function hideValidationDiv(){
    const validationDiv=document.getElementById("validationError")
    validationDiv.style.display="none"
}

function notValidEmail(){
    const emailValidation=document.getElementById("emailValidation")
    const inputOfEmail=document.getElementById("email")
    emailValidation.style.display="block"
    inputOfEmail.style.borderColor='#ff3a51';
}

function notValidPasswordLength(){
    const emptyPassword=document.getElementById("emptyPassword")
    const inputOfPassword=document.getElementById("password")
    emptyPassword.style.display="block"
    inputOfPassword.style.borderColor='#ff3a51'
}

function notValidPassword(){
    const passwordValidation=document.getElementById("passwordValidation")
    const inputOfPassword=document.getElementById("password")
    passwordValidation.style.display="block"
    inputOfPassword.style.borderColor='#ff3a51'
}

//handling red div part
function resetValidationStyles(){
    const emailValidation = document.getElementById("emailValidation")
    const emptyPassword = document.getElementById("emptyPassword")
    const passwordValidation = document.getElementById("passwordValidation")
    
    emailValidation.style.display = "none"
    emptyPassword.style.display = "none"
    passwordValidation.style.display = "none"
    

    const inputOfEmail = document.getElementById("email")
    const inputOfPassword = document.getElementById("password")
    
    inputOfEmail.style.borderColor = '#cfcfcf'
    inputOfPassword.style.borderColor = '#cfcfcf'
}


function signInWithGoogle() {
    console.log("Google sign-in clicked ");
}

function signInWithApple() {
    console.log("Apple sign-in clicked ");
}



