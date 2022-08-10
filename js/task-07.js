const textInput = document.querySelector("#font-size-control");

const output = document.querySelector("#text");

output.style.fontSize = `${output.value}px`;

textInput.addEventListener("input", function () {
  output.style.fontSize = `${this.value}px`;
});
