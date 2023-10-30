import ValidationError from "./ValidationError.js";

export default class FormValidator extends ValidationError {
  constructor(validators) {
    super();
    this.validators = validators;
  }

  validateForm() {
    console.log(this.validators);
    for (const validator of this.validators) {
      if (!validator.validate()) {
        console.log("not valid");
        validator.displayError();
      } else {
        validator.removeError();
      }
    }
    console.log("form valid");
  }
}
