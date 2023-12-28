const listOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((item) => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
