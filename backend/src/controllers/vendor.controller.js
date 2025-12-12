import Vendor from "../models/Vendor.js";

export const createVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.create({
      userId: req.user.id,
      ...req.body
    });

    res.json(vendor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ userId: req.user.id });
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
