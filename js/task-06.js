const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

const inputRightLength = inputEl.getAttribute("data-length");

function onInputBlur(event) {
  this.classList.add("invalid");
  if (event.target.value.length >= Number(inputRightLength)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
}
