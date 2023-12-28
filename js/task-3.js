const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  const userValue = event.currentTarget.value.trim();
  output.textContent = userValue ? userValue : 'Anonymous';
});
