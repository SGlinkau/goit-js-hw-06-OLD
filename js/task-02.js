const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
  
  // for (let i = 0; i < ingredients.length; i++) {
  //   let listItem = document.createElement("li");
  //   listItem.classList.add("item");
  //   listItem.innerHTML = ingredients[i];
  //   const ulIngredients = [];
  //   ulIngredients.push(listItem);
  //   console.log(ulIngredients);
  // };
  
  // list.append(...ulIngredients);

  const ulIngredients = [];
ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  ulIngredients.push(listItem);
});
list.append(...ulIngredients);