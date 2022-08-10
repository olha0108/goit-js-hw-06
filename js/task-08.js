const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.length < 1 || password.value.length < 1) {
    return alert("Все поля должны быть заполнены.");
  }
  const elementsForm = {
    email: email.value,
    password: password.value,
  };
  console.log(elementsForm);

  event.currentTarget.reset();
}
