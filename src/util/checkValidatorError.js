const { Result, ValidationError } = require("express-validator");

const checkValidationResult = (errors) => {
  if (!errors.isEmpty()) {
    let errorsMessage = "";
    errors.array().forEach((err) => (errorsMessage += err.message + " , "));
    console.log(`Error Exists when checking validation: ${errorsMessage}`);
    return { message: errors.array()[0].msg };
  }
  return;
};

module.exports = checkValidationResult;
