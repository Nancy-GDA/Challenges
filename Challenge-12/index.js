const btn = document.querySelector('.btn');
const cardThanks = document.querySelector('.card-thanks');
const ratingItems = document.querySelectorAll('.rating-item');
const card = document.querySelector('.card');

let prevSelected;

ratingItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('selected')

    if(prevSelected && prevSelected != item) {
      prevSelected.classList.remove('selected')
    }

    let ratingValue = item.querySelector('span').textContent;
    document.querySelector('#rating').textContent = ratingValue;
    prevSelected = item;
  });
});

btn.addEventListener('click', () => {
  cardThanks.style.display = 'block';
  card.style.display = 'none';
});
