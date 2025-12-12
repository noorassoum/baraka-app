import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  createReservation,
  getMyReservations
} from "../controllers/reservation.controller.js";

const router = express.Router();

router.post("/", protect, createReservation);
router.get("/me", protect, getMyReservations);

export default router;
