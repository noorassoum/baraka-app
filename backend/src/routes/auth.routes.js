import express from "express";
import { register, login, me, updateMe } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);
router.put("/me", protect, updateMe);

export default router;
