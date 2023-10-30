import ValidationError from "./ValidationError.js";

export default class DateValidator extends ValidationError {
  constructor(field) {
    super("You have to be at least 18 year old.", field);
    this.field = field;
  }

  validate() {
    let todayDate = new Date();
    let bday = new Date(this.field.value);
    let timeDiff = Math.abs(todayDate.getTime() - bday.getTime());
    let diffyears = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365);

    return diffyears > 18;
  }
}
