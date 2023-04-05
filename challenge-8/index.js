const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit-btn');
const mainCard = document.getElementById('main-card');
const thankyouCard = document.getElementById('thankyou-card');
const showValue = document.getElementById('show-value');

for (let i = 0; i < ratingBtns.length; i++) {
  ratingBtns[i].addEventListener('click', function() {
    for (let j = 0; j < ratingBtns.length; j++) {
      ratingBtns[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

var clickedValue = 0;

ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    //   console.log(`Clicked ${btn.textContent}`);
      clickedValue = btn.textContent;
      showValue.textContent =  ` ${clickedValue} `;
    });
});

submitBtn.addEventListener("click", () => {
    mainCard.style.display="none";
    thankyouCard.style.display="flex";

})