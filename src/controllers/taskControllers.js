const {
  createTask,
  fetchAllTasks,
  fetchTask,
  UpdateTask,
  deleteTaskById,
} = require("../services/taskServices");

const getIndex = (req, res) => {
  console.log("Fetching Users");
  const tasks = fetchAllTasks();
  res.json({ "result": tasks });
};
const postIndex = (req, res) => {
  console.log("Creating Task");
  res.json({ message: "Creating Task" });
};
const getTask = (req, res) => {
  console.log("Fetching Task");
  res.json({ message: "Fetching Task" });
};
const putUpdateTask = (req, res) => {
  console.log("Updating Task");
  res.json({ message: "Updating Task" });
};
const deleteTask = (req, res) => {
  console.log("Deleting Task");
  res.json({ message: "Deleting Task" });
};

module.exports = {
  getIndex,
  postIndex,
  getTask,
  putUpdateTask,
  deleteTask,
};
