const express = require("express");

const router = express.Router();

const {
  getIndex,
  postIndex,
  getTask,
  putUpdateTask,
  deleteTask,
} = require("../controllers/taskControllers.js");

const {
  checkTaskData,
  checkTaskId,
  checkPutTaskData,
} = require("../middlewares/taskValidationsMiddlewares.js");

router.get("", getIndex);

router.post("", checkTaskData, postIndex);

router.get("/:taskId", checkTaskId, getTask);

router.put("/:taskId", checkTaskId, checkPutTaskData, putUpdateTask);

router.delete("/:taskId", checkTaskId, deleteTask);

module.exports = router;
