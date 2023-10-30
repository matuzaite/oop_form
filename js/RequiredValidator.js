import ValidationError from "./ValidationError.js";

export default class RequiredValidator extends ValidationError {
  constructor(field) {
    super("Field is required", field);
    this.field = field;
  }

  validate() {
    return this.field.value !== "";
  }
}
