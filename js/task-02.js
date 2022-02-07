const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayOfListElements = ingredients.map(ingredients => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredients;
  return listItemEl;
});

document.querySelector('#ingredients').append(...arrayOfListElements);