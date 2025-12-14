import express from "express";
import { createBox, getMyBoxes, updateBox, deleteBox , toggleAvailability, getAvailableBoxes} from "../controllers/box.controller.js";
import { protectVendor } from "../middlewares/vendorAuth.js";

const router = express.Router();

router.post("/", protectVendor, createBox);
router.get("/my-boxes", protectVendor, getMyBoxes);
router.put("/:id", protectVendor, updateBox);
router.delete("/:id", protectVendor, deleteBox);
router.patch("/:id/toggle", protectVendor, toggleAvailability);


//  PUBLIC ROUTE
router.get("/available", getAvailableBoxes);




export default router;
