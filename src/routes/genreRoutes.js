const { Router } = require ("express");
const {
  deleteGenre,
  filterGenre,
  getGenreById,
  getGenres,
  postGenre,
  updateGenre,
} = require ("../controllers/genreControllers.js");

const router = Router();

router.get("/", getGenres);
router.get("/:id", getGenreById);
router.post("/", postGenre);
router.put("/:id", updateGenre);
router.delete("/:id", deleteGenre);
router.get("/filter/:filtro", filterGenre);

module.exports = router;
