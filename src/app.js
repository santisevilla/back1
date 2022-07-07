import express from "express";
import characterRoutes from "../src/routes/characterRoutes.js";
import movieRoutes from "../src/routes/movieRoutes.js";
import genreRoutes from "../src/routes/genreRoutes.js";
import userRoutes from "../src/routes/userRoutes.js"

const app = express();

//middlewars
app.use(express.json());


app.use("/characters", characterRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);
app.use("/users", userRoutes)

export default app;
