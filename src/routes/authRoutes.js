const { Router } = require("express");
const passport = require("passport");
const User = require("../models/User.js");

const router = Router();

//Register Route
router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  const userCreate = await User.create({
    email,
    username,
    password,
  });
});

//Login Route
router.get("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send({ message: "Logged In Successful" });
});

//Logout Route
router.get("/logout", (req, res) => {
  req.logout();
  res.send({ message: "Logged out" });
});

const isAuthenticated = (req, res, next) => {
  if (req.user) return next();
  else
    return res.status(401).json({
      error: "User not authenticated",
    });
};

router.use(isAuthenticated);

//Route
router.get("/", (req, res) => {
  res.send({ message: "Profile" });
});

module.exports = router;
