import express from "express";
import {
  getAvailableBoxes,
  getBoxPublicById,
  getMyBoxes,
  createBox,
  updateBox,
  deleteBox,
  toggleAvailability,
} from "../controllers/box.controller.js";
import { protectVendor } from "../middlewares/vendorAuth.js";

const router = express.Router();

/* ============================
   PUBLIC (CUSTOMER)
============================ */

router.get("/available", getAvailableBoxes);


/* ============================
   VENDOR (PROTECTED)
============================ */

router.get("/my-boxes", protectVendor, getMyBoxes);
router.put("/:id", protectVendor, updateBox);
router.delete("/:id", protectVendor, deleteBox);
router.patch("/:id/toggle", protectVendor, toggleAvailability);
//public customer
router.get("/:id", getBoxPublicById);


export default router;
