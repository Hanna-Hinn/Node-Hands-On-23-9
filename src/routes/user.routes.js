const express = require("express");

const router = express.Router();

const {
  getIndex,
  postIndex,
  getUser,
  putUpdateUser,
  deleteUser,
} = require("../controllers/userControllers.js");

const {
  checkUserData,
  checkUserId,
  checkPutUserData,
} = require("../middlewares/userValidationsMiddlewares.js");

router.get("", getIndex);

router.post("", checkUserData, postIndex);

router.get("/:UserId", checkUserId, getUser);

router.put("/:UserId", checkUserId, checkPutUserData, putUpdateUser);

router.delete("/:UserId", checkUserId, deleteUser);

module.exports = router;
