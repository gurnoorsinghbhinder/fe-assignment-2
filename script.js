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



function getElement(id) {
    return document.getElementById(id);
}

function showValidationMessage(elementId) {
    const element = getElement(elementId);
    if (element) {
        element.style.display = "block";
    }
}

function hideValidationMessage(elementId) {
    const element = getElement(elementId);
    if (element) {
        element.style.display = "none";
    }
}

function setInputBorderColor(inputId, color) {
    const input = getElement(inputId);
    if (input) {
        input.style.borderColor = color;
    }
}

function showInputError(validationElementId, inputId) {
    showValidationMessage(validationElementId);
    setInputBorderColor(inputId, 'var(--text-error)');
}

function resetInputStyle(inputId) {
    setInputBorderColor(inputId, 'var(--border-color)');
}



function getFormData(form){

    const formData = new FormData(form);
    const emailInput = formData.get('email');
    const passwordInput = formData.get('password');

    validateFormData(form, emailInput, passwordInput)
}



function validateEmailInput(emailInput) {
    if (!emailInput || emailInput.trim() === "") return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailInput);
}

function validatePasswordLength(passwordInput){
    return passwordInput && passwordInput.length > 0;
}

function validatePasswordInput(passwordInput) {
    if (!passwordInput || passwordInput.trim() === "") return false;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(passwordInput);
}



function validateFormData(form, emailInput, passwordInput){
    resetValidationStyles();
    
    const validations = [
        {
            isValid: validateEmailInput(emailInput),
            showError: () => notValidEmail(),
            shouldShow: true  
        },
        {
            isValid: validatePasswordLength(passwordInput),
            showError: () => notValidPasswordLength(),
            shouldShow: true 
        },
        {
            isValid: validatePasswordInput(passwordInput),
            showError: () => notValidPassword(),
            shouldShow: passwordInput && passwordInput.trim() !== "" && validatePasswordLength(passwordInput)
        }
    ];
    
    let hasErrors = false;
    
    validations.forEach(validation => {
        if (validation.shouldShow && !validation.isValid) {
            validation.showError();
            hasErrors = true;
        }
    });
    
    if (hasErrors) {
        showValidationDiv();
    } else {
        hideValidationDiv();
        console.log("form valid : submit triggered");
        
        alert("Login successful! Welcome to Brevo.");
        
    }
}



function showValidationDiv(){
    showValidationMessage("validationError");
}

function hideValidationDiv(){
    hideValidationMessage("validationError");
}

function notValidEmail(){
    showInputError("emailValidation", "email");
}

function notValidPasswordLength(){
    showInputError("emptyPassword", "password");
}

function notValidPassword(){
    showInputError("passwordValidation", "password");
}

function resetValidationStyles(){
    const validationElements = ["emailValidation", "emptyPassword", "passwordValidation"];
    const inputElements = ["email", "password"];
    

    validationElements.forEach(elementId => {
        hideValidationMessage(elementId);
    });
    

    inputElements.forEach(inputId => {
        resetInputStyle(inputId);
    });
}

function signInWithGoogle() {
    console.log("Google sign-in clicked");
}

function signInWithApple() {
    console.log("Apple sign-in clicked");
}