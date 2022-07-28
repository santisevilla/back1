import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import morgan from "morgan";
import characterRoutes from "../src/routes/characterRoutes.js";
import movieRoutes from "../src/routes/movieRoutes.js";
import genreRoutes from "../src/routes/genreRoutes.js";
import userRoutes from "../src/routes/userRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//settings

//middlewars
app.use(express.json());
app.use(morgan('dev'))

//global variables
app.use((req,res,next) => {
  next()
})

//routes
app.use("/characters", characterRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

//public
app.use(express.static(path.join(__dirname, 'public')))

export default app;
