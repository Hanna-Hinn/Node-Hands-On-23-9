const Task = require("../models/task");

// Create new Task
const createTask = (title, description, dueDate, isCompleted) => {
  Task.create({
    title: title,
    description: description,
    dueDate: dueDate,
    isCompleted: isCompleted,
  })
    .then(() => {
      console.log("Successfully Added Task");
      return true;
    })
    .catch((error) => {
      console.log("Error occurred when adding Task:", error.message);
      return false;
    });
};

// Fetching All Task
const fetchAllTasks = () => {
  Task.findAll()
    .then((tasks) => {
      console.log("Successfully retrieved All tasks");
      return tasks;
    })
    .catch((error) => {
      console.log("Error occurred when fetching tasks:", error.message);
      return [];
    });
};

// fetching one Task
const fetchTask = (taskId) => {
  Task.findAll({ where: { id: `${taskId}` } })
    .then((tasks) => {
      if (tasks.length === 0) {
        console.log("Requested Task Does not Exists");
        return null;
      }
      console.log("Successfully Fetched Task");
      return tasks[0];
    })
    .catch(() => {
      console.log("Failure Fetching Task: ", error.message);
      return null;
    });
};

// Updating Task
const UpdateTask = (taskId, updatedTask) => {
  if (!updatedTask || Object.keys(updatedTask).length === 0) {
    console.log("passed Task is not Valid: ", updatedTask);
    return false;
  }

  Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        console.log("Requested Task does not exists");
        return false;
      } else {
        Task.update(updatedTask, { where: { id: taskId } }).then(() => {
          console.log("Successfully updated Task!");
          return true;
        });
      }
    })
    .catch((error) => {
      console.log("Failure Updating Task: ", error.message);
      return false;
    });
};

// Deleting a Task
const deleteTaskById = (taskId) => {
  Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        console.log("Requested Task does not exists: ");
        return false;
      }
      return Task.destroy().then((result) => {
        console.log("Delete Task successfully");
        return true;
      });
    })
    .catch((error) => {
      console.log(error.message || "Error Occurred While Deleting Task!");
      return false;
    });
};

module.exports = {
  createTask,
  fetchAllTasks,
  fetchTask,
  UpdateTask,
  deleteTaskById,
};
