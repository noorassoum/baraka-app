import Reservation from "../models/reservation.model.js";
import Box from "../models/box.model.js";

// -------------------------------------
// RESERVE A BOX
// -------------------------------------
export const reserveBox = async (req, res) => {
  try {
    const customerId = req.customer._id;
    const { boxId } = req.body;

    const box = await Box.findById(boxId).populate("vendor");

    if (!box) return res.status(404).json({ message: "Box not found" });
    if (!box.available) return res.status(400).json({ message: "Box is unavailable" });
    if (box.quantity <= 0) return res.status(400).json({ message: "No quantity left" });

    // Prevent duplicate reservation
    const existing = await Reservation.findOne({
      customer: customerId,
      box: boxId,
      status: "reserved",
    });

    if (existing)
      return res.status(400).json({ message: "You already reserved this box." });

    // Create reservation
    const reservation = await Reservation.create({
      customer: customerId,
      vendor: box.vendor._id,
      box: box._id,
      pickupTime: box.pickupTime,
      status: "reserved",
    });

    // Update box quantity
    box.quantity -= 1;
    if (box.quantity === 0) box.available = false;
    await box.save();

    res.status(201).json({
      message: "Reservation successful",
      reservation,
    });
  } catch (error) {
    console.log("RESERVATION ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------------------------
// GET MY RESERVATIONS (Customer) WITH FILTERS
// -------------------------------------
// -------------------------------------
// GET MY RESERVATIONS (with status filter + pagination)
// -------------------------------------
export const getMyReservations = async (req, res) => {
  try {
    const customerId = req.customer._id;

    // Filters
    const { status } = req.query;

    const filter = { customer: customerId };
    if (status && ["reserved", "completed", "cancelled"].includes(status)) {
      filter.status = status;
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Count total (for frontend UI)
    const total = await Reservation.countDocuments(filter);

    const reservations = await Reservation.find(filter)
      .populate({
        path: "box",
        select: "title pickupTime discountedPrice originalPrice image vendor",
        populate: {
          path: "vendor",
          select: "businessName location ownerName",
        },
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      status: status || "all",
      total,
      page,
      pages: Math.ceil(total / limit),
      count: reservations.length,
      reservations,
    });
  } catch (error) {
    console.error("GET MY RESERVATIONS PAGINATION ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


// -------------------------------------
// GET ALL RESERVATIONS FOR VENDOR
// -------------------------------------
export const vendorReservations = async (req, res) => {
  try {
    const vendorId = req.vendor._id;

    const reservations = await Reservation.find({ vendor: vendorId })
      .populate("customer")
      .populate("box")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: reservations.length,
      reservations,
    });
  } catch (error) {
    console.log("VENDOR RESERVATIONS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------------------------
// CANCEL RESERVATION (Customer)
// -------------------------------------
export const cancelReservation = async (req, res) => {
  try {
    const customerId = req.customer._id;
    const reservationId = req.params.id;

    const reservation = await Reservation.findById(reservationId).populate("box");

    if (!reservation)
      return res.status(404).json({ message: "Reservation not found" });

    // Ownership check
    if (reservation.customer.toString() !== customerId.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Must be active
    if (reservation.status !== "reserved") {
      return res.status(400).json({ message: "Reservation cannot be cancelled" });
    }

    // Update reservation status
    reservation.status = "cancelled";
    await reservation.save();

    // Restore box inventory
    const box = reservation.box;
    box.quantity += 1;
    box.available = true;
    await box.save();

    res.status(200).json({
      message: "Reservation cancelled successfully",
      reservation,
    });

  } catch (error) {
    console.error("CANCEL RESERVATION ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------------------------
// VENDOR CONFIRMS PICKUP (Complete Reservation)
// -------------------------------------
export const completeReservation = async (req, res) => {
  try {
    const vendorId = req.vendor._id;
    const reservationId = req.params.id;

    const reservation = await Reservation.findById(reservationId).populate("vendor");

    if (!reservation)
      return res.status(404).json({ message: "Reservation not found" });

    // Ensure vendor owns this reservation
    if (reservation.vendor._id.toString() !== vendorId.toString()) {
      return res.status(403).json({
        message: "You are not allowed to complete this reservation",
      });
    }

    if (reservation.status !== "reserved") {
      return res.status(400).json({
        message: "Only reserved orders can be completed",
      });
    }

    reservation.status = "completed";
    await reservation.save();

    res.status(200).json({
      message: "Reservation marked as completed",
      reservation,
    });

  } catch (error) {
    console.error("COMPLETE RESERVATION ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
