import jwt from "jsonwebtoken";
import Vendor from "../models/vendor.model.js";

export const protectVendor = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.vendor = await Vendor.findById(decoded.id).select("-password");

      if (!req.vendor) {
        return res.status(401).json({ message: "Vendor not found" });
      }

      return next();

    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  return res.status(401).json({ message: "Not authorized, no token" });
};
