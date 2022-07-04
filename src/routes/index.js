import { Router } from "express";
import characterRoutes from "./characterRoutes.js";
import movieRoutes from "./movieRoutes.js";
import genreRoutes from "./genreRoutes.js";

const router = Router();

router.use("/characters", characterRoutes);
router.use("/movies", movieRoutes);
router.use("/genres", genreRoutes);

export default router;