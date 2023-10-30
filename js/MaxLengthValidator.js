import ValidationError from "./ValidationError.js";

export default class MaxLengthValidator extends ValidationError {
  constructor(field, maxLength) {
    super(`Max Length is ${maxLength}`, field);
    this.field = field;
    this.maxLength = maxLength;
  }

  validate() {
    if (this.field.value != "") {
      return this.field.value.length <= this.maxLength;
    }

    return false;
  }
}
