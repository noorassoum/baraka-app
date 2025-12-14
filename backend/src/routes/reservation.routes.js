import express from "express";
import {
  reserveBox,
  getMyReservations,
  vendorReservations,
  cancelReservation,
  completeReservation,
} from "../controllers/reservation.controller.js";

import {protectCustomer} from "../middlewares/customerAuth.js";
import {protectVendor} from "../middlewares/vendorAuth.js";

const router = express.Router();

// Customer
router.post("/", protectCustomer, reserveBox);
router.get("/my", protectCustomer, getMyReservations);
router.patch("/:id/cancel", protectCustomer, cancelReservation);


// Vendor
router.get("/vendor", protectVendor, vendorReservations);
router.patch("/:id/complete", protectVendor, completeReservation);

export default router;
