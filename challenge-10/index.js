const emailInput = document.getElementById('email');
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
submitBtn.addEventListener('click', function() {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    errorMsg.innerText = "Please provide a valid email";
    errorIcon.style.display = "block";
  }
});
