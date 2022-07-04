import { Router } from "express";
import {
  deleteMovie,
  getGenresMovie,
  getMovieById,
  getMovies,
  orderByDateMovie,
  orderByRatingMovie,
  orderByTitleMovie,
  postMovie,
  updateMovie,
} from "../controllers/movieControllers.js";

const router = Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", postMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.get("/order/title/:ordenamiento", orderByTitleMovie)
router.get("/order/date/:ordenamiento", orderByDateMovie)
router.get("/order/rating/:ordenamiento", orderByRatingMovie)
router.get("/:id/genres", getGenresMovie)

export default router;
