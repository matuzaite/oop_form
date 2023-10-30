import ValidationError from "./ValidationError.js";

export default class MinLengthValidator extends ValidationError {
  constructor(field, minLength) {
    super(`Min length is: ${minLength}`, field);
    this.field = field;
    this.minLength = minLength;
  }

  validate() {
    return (
      this.field.value.length >= this.minLength && this.field.value.length != 0
    );
  }
}
