import { Router } from "express";
import characterRoutes from "./characterRoutes.js";
import movieRoutes from "./movieRoutes.js";
import genreRoutes from "./genreRoutes.js";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes";

const router = Router();

router.use("/characters", characterRoutes);
router.use("/movies", movieRoutes);
router.use("/genres", genreRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
