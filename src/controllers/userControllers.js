const {
  createUser,
  fetchAllUsers,
  fetchUser,
  UpdateUser,
  deleteUserById,
} = require("../services/userServices");

const getIndex = (req, res) => {
  console.log("Fetching Users");
  const users = fetchAllUsers();
  res.json({ "result": users });
};

const postIndex = (req, res) => {
  console.log("Creating User");
  res.json({ message: "Creating User" });
};

const getUser = (req, res) => {
  console.log("Fetching User");
  res.json({ message: "Fetching User" });
};

const putUpdateUser = (req, res) => {
  console.log("Updating User");
  res.json({ message: "Updating User" });
};

const deleteUser = (req, res) => {
  console.log("Deleting User");
  res.json({ message: "Deleting User" });
};

module.exports = {
  getIndex,
  postIndex,
  getUser,
  putUpdateUser,
  deleteUser,
};
