function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", function () {
  const color = getRandomHexColor();

  const numberColor = document.querySelector(".color");

  numberColor.textContent = color;

  document.body.style.backgroundColor = color;
});
