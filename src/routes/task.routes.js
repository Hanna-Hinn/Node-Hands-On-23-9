const express = require("express");

const router = express.Router();

const {
  getIndex,
  postIndex,
  getTask,
  putUpdateTask,
  deleteTask,
} = require("../controllers/taskControllers.js");

router.get("", getIndex);

router.post("", postIndex);

router.get("/:TaskId", getTask);

router.put("/:TaskId", putUpdateTask);

router.delete("/:TaskId", deleteTask);

module.exports = router;
