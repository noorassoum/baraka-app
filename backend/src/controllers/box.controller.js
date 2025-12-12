import Box from "../models/Box.js";

export const createBox = async (req, res) => {
  try {
    const box = await Box.create({
      vendorId: req.user.id,   // Vendor user ID
      ...req.body
    });

    res.json(box);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getVendorBoxes = async (req, res) => {
  try {
    const boxes = await Box.find({ vendorId: req.user.id });
    res.json(boxes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAvailableBoxes = async (req, res) => {
  try {
    const boxes = await Box.find({ status: "available" });
    res.json(boxes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBox = async (req, res) => {
  try {
    const box = await Box.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(box);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBox = async (req, res) => {
  try {
    await Box.findByIdAndDelete(req.params.id);
    res.json({ message: "Box deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
