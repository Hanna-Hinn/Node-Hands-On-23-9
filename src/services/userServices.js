const User = require("../models/user");

// Create new User
const createUser = (username, email, password) => {
  User.create({
    username: username,
    email: email,
    password: password,
  })
    .then(() => {
      console.log("Successfully Added User:");
      return true;
    })
    .catch((error) => {
      console.log("Error occurred when adding User:", error.message);
      return false;
    });
};

// Fetching All Users
const fetchAllUsers = () => {
  User.findAll()
    .then((users) => {
      console.log("Successfully retrieved All Users");
      return users;
    })
    .catch((error) => {
      console.log("Error occurred when fetching Users:", error.message);
      return [];
    });
};

// fetching one user
const fetchUser = (userId) => {
  User.findAll({ where: { id: `${userId}` } })
    .then((users) => {
      if (users.length === 0) {
        console.log("Requested User Does not Exists");
        return null;
      }
      console.log("Successfully Fetched User");
      return users[0];
    })
    .catch(() => {
      console.log("Failure Fetching User: ", error.message);
      return null;
    });
};

// Updating User
const UpdateUser = (userId, updatedUser) => {
  if (!updatedUser || Object.keys(updatedUser).length === 0) {
    console.log("passed user is not Valid: ", updatedUser);
    return false;
  }

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        console.log("Requested user does not exists");
        return false;
      } else {
        User.update(updatedUser, { where: { id: userId } }).then(() => {
          console.log("Successfully updated User!");
          return true;
        });
      }
    })
    .catch((error) => {
      console.log("Failure Updating User: ", error.message);
      return false;
    });
};

// Deleting a User
const deleteUserById = (userId) => {
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        console.log("Requested User does not exists: ");
        return false;
      }
      return User.destroy().then((result) => {
        console.log("Delete User successfully");
        return true;
      });
    })
    .catch((error) => {
      console.log(error.message || "Error Occurred While Deleting User!");
      return false;
    });
};

module.exports = {
  createUser,
  fetchAllUsers,
  fetchUser,
  UpdateUser,
  deleteUserById,
};
