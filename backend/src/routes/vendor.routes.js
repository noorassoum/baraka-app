import express from "express";
import { protect, } from "../middlewares/auth.middleware.js";
import { requireVendor } from "../middlewares/role.middleware.js";
import { createVendorProfile, getMyVendorProfile } from "../controllers/vendor.controller.js";

const router = express.Router();

router.post("/", protect, requireVendor, createVendorProfile);
router.get("/me", protect, requireVendor, getMyVendorProfile);

export default router;
