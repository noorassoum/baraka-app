import Box from "../models/box.model.js";
import Vendor from "../models/vendor.model.js";

export const createBox = async (req, res) => {
  try {
    const { title, description, originalPrice, discountedPrice, quantity, pickupTime, image } = req.body;

    if (!title || !description || !originalPrice || !discountedPrice || !pickupTime) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const box = await Box.create({
      vendor: req.vendor._id,
      title,
      description,
      originalPrice,
      discountedPrice,
      quantity,
      pickupTime,
      image,
    });

    res.status(201).json({
      message: "Box created successfully",
      box,
    });

  } catch (error) {
    console.log("CREATE BOX ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL BOXES FOR LOGGED-IN VENDOR
export const getMyBoxes = async (req, res) => {
  try {
    const boxes = await Box.find({ vendor: req.vendor._id }).sort("-createdAt");

    res.status(200).json({
      count: boxes.length,
      boxes
    });

  } catch (error) {
    console.log("GET MY BOXES ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE BOX
export const updateBox = async (req, res) => {
  try {
    const boxId = req.params.id;

    const box = await Box.findById(boxId);

    if (!box) {
      return res.status(404).json({ message: "Box not found" });
    }

    // check vendor ownership
    if (box.vendor.toString() !== req.vendor._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this box" });
    }

    const updates = req.body;

    Object.assign(box, updates);

    const updatedBox = await box.save();

    res.status(200).json({
      message: "Box updated successfully",
      box: updatedBox
    });

  } catch (error) {
    console.log("UPDATE BOX ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteBox = async (req, res) => {
  try {
    const boxId = req.params.id;

    const box = await Box.findById(boxId);

    if (!box) {
      return res.status(404).json({ message: "Box not found" });
    }

    // Check vendor ownership
    if (box.vendor.toString() !== req.vendor._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this box" });
    }

    await box.deleteOne();

    res.json({ message: "Box deleted successfully" });

  } catch (error) {
    console.log("DELETE BOX ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const toggleAvailability = async (req, res) => {
  try {
    const box = await Box.findById(req.params.id);

    if (!box) {
      return res.status(404).json({ message: "Box not found" });
    }

    // Only owner vendor can toggle
    if (box.vendor.toString() !== req.vendor._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Toggle
    box.available = !box.available;
    await box.save();

    res.json({
      message: `Box is now ${box.available ? "available" : "unavailable"}`,
      box
    });

  } catch (error) {
    console.log("TOGGLE AVAILABILITY ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// ===============================
// GET ALL AVAILABLE BOXES (PUBLIC)
// ===============================
export const getAvailableBoxes = async (req, res) => {
  try {
    const boxes = await Box.find({
      available: true,
      quantity: { $gt: 0 }
    })
      .populate("vendor", "businessName location ownerName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: boxes.length,
      boxes,
    });

  } catch (error) {
    console.error("GET AVAILABLE BOXES ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// ===============================
// GET SINGLE BOX (PUBLIC)
// ===============================
export const getBoxPublicById = async (req, res) => {
  try {
    const box = await Box.findById(req.params.id)
      .populate("vendor", "businessName location");

    if (!box) {
      return res.status(404).json({ message: "Box not found" });
    }

    res.status(200).json({ box });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

