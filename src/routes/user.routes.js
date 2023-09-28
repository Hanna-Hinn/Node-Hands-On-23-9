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

router.get("/:userId", checkUserId, getUser);

router.put("/:userId", checkUserId, checkPutUserData, putUpdateUser);

router.delete("/:userId", checkUserId, deleteUser);

module.exports = router;
