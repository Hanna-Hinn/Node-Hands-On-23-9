const User = require("../models/user");

// Create new User
const createUser = async (username, email, password) => {
  return new Promise((resolve) => {
    User.create({
      username: username,
      email: email,
      password: password,
    })
      .then(() => {
        console.log("Successfully Added User:");
        resolve(true);
      })
      .catch((error) => {
        console.log("Error occurred when adding User:", error.message);
        resolve(false);
      });
  });
};

// Fetching All Users
const fetchAllUsers = () => {
  return new Promise((resolve) => {
    User.findAll()
      .then((users) => {
        console.log("Successfully retrieved All Users");
        resolve(users);
      })
      .catch((error) => {
        console.log("Error occurred when fetching Users:", error.message);
        resolve([]);
      });
  });
};

// fetching one user
const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    User.findAll({ where: { id: `${userId}` } })
      .then((users) => {
        if (users.length === 0) {
          console.log("Requested User Does not Exist");
          resolve(null);
        } else {
          console.log("Successfully Fetched User");
          resolve(users[0]);
        }
      })
      .catch((error) => {
        console.log("Failure Fetching User: ", error.message);
        reject(error);
      });
  });
};

// Updating User
const UpdateUser = (userId, updatedUser) => {
  return new Promise((resolve) => {
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          console.log("Requested user does not exists");
          resolve(false);
        } else {
          User.update(updatedUser, { where: { id: userId } }).then(() => {
            console.log("Successfully updated User!");
            resolve(true);
          });
        }
      })
      .catch((error) => {
        console.log("Failure Updating User: ", error.message);
        resolve(false);
      });
  });
};

// Deleting a User
const deleteUserById = (userId) => {
  return new Promise((resolve) => {
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          console.log("Requested User does not exists: ");
          resolve(false);
        }
        return user.destroy().then((result) => {
          console.log("Delete User successfully");
          resolve(true);
        });
      })
      .catch((error) => {
        console.log(error.message || "Error Occurred While Deleting User!");
        resolve(false);
      });
  });
};

module.exports = {
  createUser,
  fetchAllUsers,
  fetchUser,
  UpdateUser,
  deleteUserById,
};
