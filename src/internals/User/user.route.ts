import { Router } from "express";
import { signup, login, getAlluser, getUserById, updateUser } from "./user.controller";
const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/all", getAlluser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);


export default router;
