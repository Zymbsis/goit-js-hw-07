const button = document.querySelector('.change-color');
const changeColor = document.querySelector('.color');

button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  changeColor.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}
