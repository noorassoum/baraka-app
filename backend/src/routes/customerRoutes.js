import express from "express";
import { registerCustomer, loginCustomer, getCustomerProfile , updateCustomerProfile , } from "../controllers/customer.controller.js";
import { protectCustomer } from "../middlewares/customerAuth.js";

const router = express.Router();

// Register
router.post("/register", registerCustomer);

// Login
router.post("/login", loginCustomer);

// Get customer profile (protected)
router.get("/me", protectCustomer, getCustomerProfile);

// Update the logged-in customer's profile
router.put("/me", protectCustomer, updateCustomerProfile);

export default router;