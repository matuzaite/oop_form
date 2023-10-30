import ValidationError from "./ValidationError.js";

export default class EmailValidator extends ValidationError {
  constructor(field) {
    super("Email is incorrect", field);
    this.field = field;
  }

  validate() {
    const re = /\S+@\S+\.\S+/;

    return re.test(this.field.value);
  }
}
