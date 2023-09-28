const { body, param } = require("express-validator");

const checkTaskData = [
  body("title", "Please enter a valid Task Title.")
    .exists()
    .isString()
    .notEmpty(),
  body("description", "Please enter a valid task Description.")
    .exists()
    .isString(),
  body("dueDate", "Please enter a valid task Date.")
    .exists()
    .isDate()
    .notEmpty(),
  body("isCompleted", "Please enter true or false on task completion")
    .exists()
    .isBoolean(),
];

const checkTaskId = [
  param("taskId", "Please enter a valid task Id in the params")
    .exists()
    .isNumeric()
    .notEmpty(),
];

const checkPutTaskData = [
  body("title", "Please enter a valid Task Title.")
    .optional()
    .isString()
    .notEmpty(),
  body("description", "Please enter a valid task Description.")
    .optional()
    .isString(),
  body("dueDate", "Please enter a valid task Date.")
    .optional()
    .isDate()
    .notEmpty(),
  body("isCompleted", "Please enter true or false on task completion")
    .optional()
    .isBoolean(),
];

module.exports = {
  checkTaskData,
  checkTaskId,
  checkPutTaskData,
};
