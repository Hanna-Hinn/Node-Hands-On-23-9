const express = require("express");

const router = express.Router();

const {
  getIndex,
  postIndex,
  getUser,
  putUpdateUser,
  deleteUser,
} = require("../controllers/userControllers.js");

router.get("", getIndex);

router.post("", postIndex);

router.get("/:UserId", getUser);

router.put("/:UserId", putUpdateUser);

router.delete("/:UserId", deleteUser);

module.exports = router;
