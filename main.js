import "./sass/style.scss";


//Validacion de errores personalizada para el formulario
const form = document.querySelector("#contact-form");

if (form) {
  const fields = form.querySelectorAll("input, textarea");
  const ERROR_TEXT = "Sorry, invalid format here";

  const getErrorElement = (field) => field.parentElement?.querySelector(".field__error");

  const validateField = (field) => {
    const errorElement = getErrorElement(field);
    const isValid = field.validity.valid;

    if (errorElement) {
      errorElement.textContent = isValid ? "" : ERROR_TEXT;
    }

    field.setAttribute("aria-invalid", String(!isValid));
  };

  form.addEventListener("submit", (event) => {
    let hasErrors = false;

    fields.forEach((field) => {
      validateField(field);
      if (!field.validity.valid) {
        hasErrors = true;
      }
    });

    if (hasErrors) {
      event.preventDefault();
    }
  });
}
