import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  const user = await User.findAll();
  return res.status(200).json(user);
};

export const postUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({
    email,
    password,
  });
  return res.status(200).json(user);
};
