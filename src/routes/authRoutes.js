import { Router } from "express";

const router = Router()

router.get("/signup", (req,res) => {
    res.render('authentication/signup')
})

export default router