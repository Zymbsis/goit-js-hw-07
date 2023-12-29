const input = document.querySelector('#controls input');
const createCard = document.querySelector('[data-create]');
const destroyCard = document.querySelector('[data-destroy]');
const boxForCard = document.querySelector('#boxes');

createCard.addEventListener('click', onButtonClick);
destroyCard.addEventListener('click', destroyBoxes);

function onButtonClick() {
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    return createBoxes(amount);
  } else input.value = '';
}
function destroyBoxes() {
  boxForCard.innerHTML = '';
}

function createBoxes(amount) {
  boxForCard.innerHTML = '';
  const cardArray = Array.from(
    { length: amount },
    (item) => (item = '<div class="card"></div>'),
  ).join('\n\n');

  boxForCard.insertAdjacentHTML('afterbegin', cardArray);

  const cardStyle = Array.from(document.querySelectorAll('.card'));
  let width = 30;
  let height = 30;
  for (let i = 0; i < cardStyle.length; i++) {
    cardStyle[i].style.width = `${width}px`;
    cardStyle[i].style.height = `${height}px`;
    cardStyle[i].style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
  }
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
