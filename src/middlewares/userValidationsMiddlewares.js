const { body, param } = require("express-validator");

const checkUserData = [
  body("username", "Please enter a valid username.")
    .exists()
    .isString()
    .notEmpty(),
  body("email", "Please enter a valid email.").exists().isEmail().notEmpty(),
  body("password", "Please enter a valid password.")
    .exists()
    .isString()
    .notEmpty(),
];

const checkUserId = [
  param("userId", "Please enter a valid User Id in the params")
    .exists()
    .isNumeric()
    .notEmpty(),
];

const checkPutUserData = [
  body("username", "Please enter a valid username.").optional().isString(),
  body("email", "Please enter a valid email.").optional().isString(),
  body("password", "Please enter a valid password.").optional().isString(),
];

module.exports = {
  checkUserData,
  checkUserId,
  checkPutUserData,
};
