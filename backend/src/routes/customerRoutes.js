import express from "express";
import { registerCustomer, loginCustomer, getCustomerProfile } from "../controllers/customer.controller.js";
import { protectCustomer } from "../middlewares/customerAuth.js";

const router = express.Router();

// Register
router.post("/register", registerCustomer);

// Login
router.post("/login", loginCustomer);

// Get customer profile (protected)
router.get("/me", protectCustomer, getCustomerProfile);

export default router;