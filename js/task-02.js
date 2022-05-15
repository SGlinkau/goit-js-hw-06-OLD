const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
        const li = document.createElement("li");
        li.textContent = ingredient;
        li.className = "item";
        const body = document.body;
        const ul = body.firstElementChild;
        ul.append(li);
      }