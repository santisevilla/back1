const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { fileURLToPath } = require("url");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const characterRoutes = require("");
const movieRoutes = require("../src/routes/characterRoutes.js");
const genreRoutes = require("../src/routes/genreRoutes.js");
const userRoutes = require('"../src/routes/userRoutes.js');
const authRoutes = require("../src/routes/authRoutes.js");

const app = express();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

//settings

//middlewars
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(session({ secret: "hola", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//global variables
app.use((req, res, next) => {
  next();
});

//routes
app.use("/characters", characterRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

//public
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
