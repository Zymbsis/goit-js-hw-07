const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  const userValue = event.currentTarget.value
    .trim()
    .split('')
    .map((item, index, arr) =>
      index === 0 || arr[index - 1] === ' ' ? item.toUpperCase() : item,
    )
    .join('');
  output.textContent = userValue ? userValue : 'Anonymous';
});
