import Vendor from "../models/vendor.model.js";
import { generateToken } from "../utils/generateToken.js";

// REGISTER VENDOR
export const registerVendor = async (req, res) => {
  try {
    const { businessName, ownerName, email, password, phone, location } = req.body;

    if (!businessName || !ownerName || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const exists = await Vendor.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });

    const vendor = await Vendor.create({
      businessName,
      ownerName,
      email,
      password,
      phone,
      location,
    });

    res.status(201).json({
      token: generateToken(vendor._id),
      vendor: {
        _id: vendor._id,
        businessName: vendor.businessName,
        ownerName: vendor.ownerName,
        email: vendor.email,
      },
    });
  } catch (error) {
    console.error("Vendor Register Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN VENDOR
export const loginVendor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const vendor = await Vendor.findOne({ email }).select("+password");
    if (!vendor) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await vendor.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({
      token: generateToken(vendor._id),
      vendor: {
        _id: vendor._id,
        businessName: vendor.businessName,
        ownerName: vendor.ownerName,
        email: vendor.email,
      },
    });
  } catch (error) {
    console.error("Vendor Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET LOGGED-IN VENDOR
export const getVendorProfile = async (req, res) => {
  res.json({
    _id: req.vendor._id,
    businessName: req.vendor.businessName,
    ownerName: req.vendor.ownerName,
    email: req.vendor.email,
    phone: req.vendor.phone,
    location: req.vendor.location,
  });

};
// ===============================
// UPDATE VENDOR PROFILE
// ===============================
{/*export const updateVendor = async (req, res) => {
  try {
    const vendorId = req.vendor._id;  // <--- ERROR was here

    const updates = {
      businessName: req.body.businessName,
      ownerName: req.body.ownerName,
      phone: req.body.phone,
      location: req.body.location,
    };

    Object.keys(updates).forEach(
      key => updates[key] === undefined && delete updates[key]
    );

    const vendor = await Vendor.findByIdAndUpdate(vendorId, updates, {
      new: true,
      runValidators: true
    });

    return res.status(200).json(vendor);

  } catch (error) {
    console.log("UPDATE VENDOR ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
}; */}

export const vendorReservations = async (req, res) => {
  try {
    const vendorId = req.vendor._id;

    const reservations = await Reservation.find({ vendor: vendorId })
      .populate({
        path: "customer",
        select: "name email",
      })
      .populate({
        path: "box",
        select: "title discountedPrice originalPrice image pickupTime",
      })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      count: reservations.length,
      reservations,
    });
  } catch (error) {
    console.error("VENDOR RESERVATIONS ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateVendorProfile = async (req, res) => {
  try {
    const vendorId = req.vendor._id;

    const updates = {
      businessName: req.body.businessName,
      ownerName: req.body.ownerName,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      bio: req.body.bio,
      avatarUrl: req.body.avatarUrl,
    };

    Object.keys(updates).forEach(
      (key) => updates[key] === undefined && delete updates[key]
    );

    const vendor = await Vendor.findByIdAndUpdate(vendorId, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    return res.status(200).json(vendor);
  } catch (error) {
    console.error("UPDATE VENDOR PROFILE ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
