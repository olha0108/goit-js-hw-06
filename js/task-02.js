const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listAll = document.querySelector("#ingredients");

const arrayIngredients = [];

ingredients.forEach((ingredient) => {
  const listOfIngredients = document.createElement("li");
  listOfIngredients.classList.add("item");
  listOfIngredients.textContent = ingredient;
  arrayIngredients.push(listOfIngredients);
});

listAll.append(...arrayIngredients);
