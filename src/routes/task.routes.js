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

router.get("/:TaskId", checkTaskId, getTask);

router.put("/:TaskId", checkTaskId, checkPutTaskData, putUpdateTask);

router.delete("/:TaskId", checkTaskId, deleteTask);

module.exports = router;
