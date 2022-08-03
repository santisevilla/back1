const { Router } = require("express");
const characterRoutes = require("./characterRoutes.js");
const movieRoutes = require("./movieRoutes.js");
const genreRoutes = require("./genreRoutes.js");
const userRoutes = require("./userRoutes.js");
const authRoutes = require("./authRoutes");

const router = Router();

router.use("/characters", characterRoutes);
router.use("/movies", movieRoutes);
router.use("/genres", genreRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
