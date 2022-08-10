let counterValue = 0;

const value = document.querySelector("#value");

const btnPlus = document.querySelector('[data-action="increment"]');

const btnMinus = document.querySelector('[data-action="decrement"]');

btnPlus.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

btnMinus.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
