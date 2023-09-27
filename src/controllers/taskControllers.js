// Imports
const { validationResult } = require("express-validator");

const {
  createTask,
  fetchAllTasks,
  fetchTask,
  UpdateTask,
  deleteTaskById,
} = require("../services/taskServices");

// Fetching all Data
const getIndex = (req, res) => {
  console.log("Fetching Tasks...");
  const tasks = fetchAllTasks();
  return res.json({ result: tasks });
};

// Creating new Instance of Data
const postIndex = (req, res) => {
  console.log("Creating Task...");
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const title = req.body.title;
  const description = req.body.description;
  const dueDate = req.body.dueDate;
  const isCompleted = req.body.isCompleted;

  const status = createTask(title, description, dueDate, isCompleted);
  if (status) {
    return res.status(200).json({ result: "Task created Successfully" });
  } else {
    return res.status(500).json({ result: "Task creation Failed" });
  }
};

// Fetch Data based on ID
const getTask = (req, res) => {
  console.log("Fetching Task...");
  const taskId = req.params.taskId;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const task = fetchTask(taskId);
  if (task) {
    return res.status(200).json({ result: task });
  } else {
    return res.status(500).json({
      result: "Task fetching Failed \n Make Sure that the wanted task exists!",
    });
  }
};

// Updated Data
const putUpdateTask = (req, res) => {
  console.log("Updating Task...");
  const taskId = req.params.taskId;
  const updatedTask = req.body;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const status = UpdateTask(taskId, updatedTask);
  if (status) {
    return res.status(200).json({ result: "Task Successfully Updated" });
  } else {
    return res.status(500).json({
      result: "Task Updating Failed \n Make Sure that the wanted task exists!",
    });
  }
};

// delete a task
const deleteTask = (req, res) => {
  console.log("Deleting Task...");
  const taskId = req.params.taskId;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const status = deleteTaskById(taskId);
  if (status) {
    return res.status(200).json({ result: "Task Successfully Deleted" });
  } else {
    return res.status(500).json({
      result: "Task Deletion Failed \n Make Sure that the wanted task exists!",
    });
  }
};

//exports
module.exports = {
  getIndex,
  postIndex,
  getTask,
  putUpdateTask,
  deleteTask,
};
