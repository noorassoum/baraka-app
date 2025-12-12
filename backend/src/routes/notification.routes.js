import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { getUserNotifications, markAsRead } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protect, getUserNotifications);
router.put("/:id/read", protect, markAsRead);

export default router;
