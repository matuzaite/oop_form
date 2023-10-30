import ValidationError from "./ValidationError.js";

export default class PasswordValidator extends ValidationError {
  constructor(field, confirmPasswordField) {
    super("Passwords have to match", field);
    this.field = field;
    this.confirmPasswordField = confirmPasswordField;
  }

  validate() {
    return (
      this.field.value === this.confirmPasswordField.value &&
      this.field.value.length != 0
    );
  }
}
