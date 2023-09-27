// imports
const { validationResult } = require("express-validator");

const {
  createUser,
  fetchAllUsers,
  fetchUser,
  UpdateUser,
  deleteUserById,
} = require("../services/userServices");

// Fetching users
const getIndex = (req, res) => {
  console.log("Fetching Users...");
  const users = fetchAllUsers();
  return res.json({ result: users });
};

// creating a new user
const postIndex = (req, res) => {
  console.log("Creating User...");
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const status = createUser(username, email, password);
  if (status) {
    return res.status(200).json({ result: "User created Successfully" });
  } else {
    return res.status(500).json({ result: "User creation Failed" });
  }
};

// get user based on id
const getUser = (req, res) => {
  console.log("Fetching User...");
  const userId = req.params.userId;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const user = fetchUser(userId);
  if (user) {
    return res.status(200).json({ result: user });
  } else {
    return res.status(500).json({
      result: "User fetching Failed \n Make Sure that the wanted user exists!",
    });
  }
};

// Update user
const putUpdateUser = (req, res) => {
  console.log("Updating User...");
  const userId = req.params.userId;
  const updatedUser = req.body;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const status = UpdateUser(userId, updatedUser);
  if (status) {
    return res.status(200).json({ result: "User Successfully Updated" });
  } else {
    return res.status(500).json({
      result: "User Updating Failed \n Make Sure that the wanted user exists!",
    });
  }
};

// Delete a user based on id
const deleteUser = (req, res) => {
  console.log("Deleting User...");
  const userId = req.params.userId;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json(checkError);
  }

  const status = deleteUserById(userId);
  if (status) {
    return res.status(200).json({ result: "User Successfully Deleted" });
  } else {
    return res.status(500).json({
      result: "User Deletion Failed \n Make Sure that the wanted user exists!",
    });
  }
};

// exports
module.exports = {
  getIndex,
  postIndex,
  getUser,
  putUpdateUser,
  deleteUser,
};
