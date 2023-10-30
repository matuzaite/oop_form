import ValidationError from "./ValidationError.js";

export default class NumberValidator extends ValidationError {
  constructor(field) {
    super("Type the number", field);
    this.field = field;
  }

  validate() {
    return isNaN(Number(this.field));
  }
}
