let btn = document.querySelector('.btn');
let cardThanks = document.querySelector('.card-thanks');
let ratingItems = document.querySelectorAll('.rating-item');
let card = document.querySelector('.card');

ratingItems.forEach(item => {
  item.addEventListener('click', () => {
    ratingItems.forEach(item => {
      item.classList.remove('selected');
    });

    item.classList.add('selected');

    ratingItems.forEach(item => {
      if (item.classList.contains('selected')) {
        item.style.backgroundColor = 'var(--naranja)';
        item.style.color = 'white';
      } else {
        item.style.backgroundColor = 'var(--azul_marino)';
        item.style.color = 'var(--gris)';
      }
    });

    let ratingValue = item.querySelector('span').textContent;
    document.querySelector('#rating').textContent = ratingValue;
  });

  item.addEventListener('mouseover', () => {
    if (!item.classList.contains('selected')) {
      item.style.backgroundColor = 'var(--gris_claro)';
      item.style.color = 'white'
    }
  });

  item.addEventListener('mouseout', () => {
    if (!item.classList.contains('selected')) {
      item.style.backgroundColor = 'var(--azul_marino)';
      item.style.color = 'var(--gris)'

    }
  });
});

btn.addEventListener('click', () => {
  cardThanks.style.display = 'block';
  card.style.display = 'none';
});
