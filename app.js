function checkNumber (e) {
  document.querySelector('.number').textContent = e.target.id;
}

const cards = document.querySelectorAll('.card');
const cardsArr = Array.prototype.slice.call(cards);

cardsArr.forEach(card => {
  card.addEventListener('mouseover', (e)=> checkNumber(e))
})