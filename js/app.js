import RequiredValidator from "./RequiredValidator.js";
import EmailValidator from "./EmailValidator.js";
import MaxLengthValidator from "./MaxLengthValidator.js";
import MinLengthValidator from "./MinLengthValidator.js";
import NumberValidator from "./NumberValidator.js";
import PasswordValidator from "./PasswordValidator.js";
import DateValidator from "./DateValidator.js";
import FormValidator from "./FormValidator.js";

const firstNameField = document.querySelector("#firstName");
const lastNameField = document.querySelector("#lastName");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const passwordConfirmField = document.querySelector("#passwordConfirm");
const incomeField = document.querySelector("#annualIncome");
const ageField = document.querySelector("#age");
const aboutField = document.querySelector("#about");

const btn = document.querySelector("#submit-btn");

let validators = new Array(
  new RequiredValidator(firstNameField),
  new RequiredValidator(lastNameField),
  new RequiredValidator(ageField),
  new RequiredValidator(aboutField),
  new RequiredValidator(emailField),
  new NumberValidator(incomeField),
  new EmailValidator(emailField),
  new MaxLengthValidator(passwordConfirmField, 7),
  new MinLengthValidator(passwordConfirmField, 2),
  new PasswordValidator(passwordField, passwordConfirmField),
  new DateValidator(ageField)
);

const formValidation = new FormValidator(validators);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation.validateForm(validators);
});
