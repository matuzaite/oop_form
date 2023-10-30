export default class ValidationError {
  constructor(errorMessage, field) {
    this.errorMessage = errorMessage;
    this.field = field;
  }

  displayError() {
    this.field.classList.remove("valid");
    this.field.classList.add("invalid");
    this.field.nextElementSibling.innerText = this.errorMessage;
  }

  removeError() {
    this.field.classList.add("valid");
    this.field.classList.remove("invalid");
    this.field.nextElementSibling.innerText = "";
  }
}
