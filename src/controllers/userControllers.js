const { User } = require("../models/User.js");

const getUsers = async (req, res) => {
  const user = await User.findAll();
  return res.status(200).json(user);
};

const postUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({
    email,
    password,
  });
  return res.status(200).json(user);
};

module.exports = {
  getUsers,
  postUser
}