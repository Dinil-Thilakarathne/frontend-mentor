const sumbitBtn = document.querySelector('.submit-btn');
const cancelBtn = document.querySelector('.popup__cancel');
const container = document.querySelector('.container');
const popup = document.querySelector('.popup');
const email = document.querySelector('.email-input');
const setEmail = document.querySelector('.user-email');
const error = document.querySelector('.error-message');

// check email validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

sumbitBtn.addEventListener('click', () => {
    
    const userEmail = email.value;
    // setEmail.textContent = userEmail;
    
    if(validateEmail(userEmail)){
        console.log('true');
        
        container.classList.toggle('active');
        popup.classList.toggle('active');
    }else{
        error.textContent = "Valid email required"
        console.log('false');
    }

});
cancelBtn.addEventListener('click', () => {
    location.reload();
});

