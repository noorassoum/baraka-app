import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { requireVendor } from "../middlewares/role.middleware.js";
import {
  createBox,
  getVendorBoxes,
  getAvailableBoxes,
  updateBox,
  deleteBox
} from "../controllers/box.controller.js";

const router = express.Router();

router.post("/", protect, requireVendor, createBox);
router.get("/vendor", protect, requireVendor, getVendorBoxes);
router.get("/available", getAvailableBoxes);
router.put("/:id", protect, requireVendor, updateBox);
router.delete("/:id", protect, requireVendor, deleteBox);

export default router;
