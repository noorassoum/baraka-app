import express from "express";
import {
  registerVendor,
  loginVendor,
  getVendorProfile,
  updateVendorProfile,
} from "../controllers/vendor.controller.js";
import { protectVendor } from "../middlewares/vendorAuth.js";

const router = express.Router();

router.post("/register", registerVendor);
router.post("/login", loginVendor);
router.get("/me", protectVendor, getVendorProfile);
router.put("/me", protectVendor, updateVendorProfile);

export default router;
