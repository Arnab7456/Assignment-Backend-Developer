import { Router } from "express";
import { signup, login, getAlluser } from "./user.controller";
const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/all", getAlluser);

export default router;
