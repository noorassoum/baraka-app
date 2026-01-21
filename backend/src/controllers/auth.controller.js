import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

// ================= REGISTER =================
export const register = async (req, res) => {
  const { name, email, password, role = "customer" } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const user = await User.create({ name, email, password, role });

  return res.status(201).json({
    token: generateToken(user),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

// ================= LOGIN =================
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.matchPassword(password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({
    token: generateToken(user),
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

// ================= ME =================
export const me = async (req, res) => {
  res.json(req.user);
};

// ========================================
// UPDATE CURRENT USER
// ========================================
export const updateMe = async (req, res) => {
  try {
    const updates = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      bio: req.body.bio,
      avatarUrl: req.body.avatarUrl,
    };

    // remove undefined fields
    Object.keys(updates).forEach(
      (key) => updates[key] === undefined && delete updates[key]
    );

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true }
    );

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber || "",
      bio: user.bio || "",
      avatarUrl: user.avatarUrl || "",
    });
  } catch (err) {
    console.log("UPDATE ME ERROR:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
