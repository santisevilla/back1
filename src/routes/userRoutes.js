const { Router } = require("express");
const { getUsers, postUser } = require("../controllers/userControllers.js");

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);

module.exports = router;
