import { Router } from "express";
import {
  deleteCharacter,
  getCharacterById,
  getCharacters,
  getMoviesCharacter,
  orderByAgeCharacter,
  orderByIdCharacter,
  orderByNameCharacter,
  orderByWeightCharacter,
  postCharacter,
  updateCharacter,
} from "../controllers/characterControllers.js";
const router = Router();

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
router.post("/", postCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);
router.get("/order/id/:ordenamiento", orderByIdCharacter);
router.get("/order/name/:ordenamiento", orderByNameCharacter);
router.get("/order/age/:ordenamiento", orderByAgeCharacter);
router.get("/order/weight/:ordenamiento", orderByWeightCharacter);
router.get("/:id/movies", getMoviesCharacter)

export default router;
