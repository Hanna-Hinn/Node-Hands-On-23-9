// imports
const { validationResult } = require("express-validator");
const checkValidationResult = require("../util/checkValidatorError");
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
  fetchAllUsers().then((users) => {
    return res.json({ result: users });
  });
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

  createUser(username, email, password).then((status) => {
    if (status) {
      return res.status(200).json({ result: "User created Successfully" });
    } else {
      return res.status(500).json({ result: "User creation Failed" });
    }
  });
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

  fetchUser(userId)
    .then((user) => {
      console.log(user);
      if (user) {
        return res.status(200).json({ result: user });
      } else {
        return res.status(404).json({
          result: "Please make Sure that the wanted user exists!",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        result: err.message || "Error Occurred while fetching the user",
      });
    });
};

// Update user
const putUpdateUser = (req, res) => {
  console.log("Updating User...");
  const userId = req.params.userId;
  const updatedUser = req.body;
  const errors = validationResult(req);
  const checkError = checkValidationResult(errors);

  if (checkError) {
    return res.status(422).json({ result: `${checkError}` });
  }
  if (!updatedUser || Object.keys(updatedUser).length === 0) {
    console.log("passed user is not Valid: ", updatedUser);
    return res.status(422).json({ result: "Invalid user passed" });
  }

  UpdateUser(userId, updatedUser).then((status) => {
    if (status) {
      return res.status(200).json({ result: "User Successfully Updated" });
    } else {
      return res.status(500).json({
        result: "User Updating Failed , Make Sure that the wanted user exists!",
      });
    }
  });
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

  deleteUserById(userId).then((status) => {
    if (status) {
      return res.status(200).json({ result: "User Successfully Deleted" });
    } else {
      return res.status(500).json({
        result:
          "User Deletion Failed , Make Sure that the wanted user exists!",
      });
    }
  });
};

// exports
module.exports = {
  getIndex,
  postIndex,
  getUser,
  putUpdateUser,
  deleteUser,
};
