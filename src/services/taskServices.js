const Task = require("../models/task");

// Create new Task
const createTask = (title, description, dueDate, isCompleted) => {
  return new Promise((resolve) => {
    Task.create({
      title: title,
      description: description,
      dueDate: dueDate,
      isCompleted: isCompleted,
    })
      .then(() => {
        console.log("Successfully Added Task");
        resolve(true);
      })
      .catch((error) => {
        console.log("Error occurred when adding Task:", error.message);
        resolve(false);
      });
  });
};

// Fetching All Task
const fetchAllTasks = () => {
  return new Promise((resolve) => {
    Task.findAll()
      .then((tasks) => {
        console.log("Successfully retrieved All tasks");
        resolve(tasks);
      })
      .catch((error) => {
        console.log("Error occurred when fetching tasks:", error.message);
        resolve([]);
      });
  });
};

// fetching one Task
const fetchTask = (taskId) => {
  return new Promise((resolve) => {
    Task.findAll({ where: { id: `${taskId}` } })
      .then((tasks) => {
        if (tasks.length === 0) {
          console.log("Requested Task Does not Exists");
          resolve(null);
        }
        console.log("Successfully Fetched Task");
        resolve(tasks[0]);
      })
      .catch(() => {
        console.log("Failure Fetching Task: ", error.message);
        resolve(null);
      });
  });
};

// Updating Task
const UpdateTask = (taskId, updatedTask) => {
  return new Promise((resolve) => {
    Task.findByPk(taskId)
      .then((task) => {
        if (!task) {
          console.log("Requested Task does not exists");
          resolve(false);
        } else {
          Task.update(updatedTask, { where: { id: taskId } }).then(() => {
            console.log("Successfully updated Task!");
            resolve(true);
          });
        }
      })
      .catch((error) => {
        console.log("Failure Updating Task: ", error.message);
        resolve(false);
      });
  });
};

// Deleting a Task
const deleteTaskById = (taskId) => {
  return new Promise((resolve) => {
    Task.findByPk(taskId)
      .then((task) => {
        if (!task) {
          console.log("Requested Task does not exists: ");
          resolve(false);
        }
        return task.destroy().then((result) => {
          console.log("Delete Task successfully");
          resolve(true);
        });
      })
      .catch((error) => {
        console.log(error.message || "Error Occurred While Deleting Task!");
        resolve(false);
      });
  });
};

module.exports = {
  createTask,
  fetchAllTasks,
  fetchTask,
  UpdateTask,
  deleteTaskById,
};
