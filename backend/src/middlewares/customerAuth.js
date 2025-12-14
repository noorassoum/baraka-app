import jwt from "jsonwebtoken";
import Customer from "../models/customer.model.js";

export const protectCustomer  = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.customer = await Customer.findById(decoded.id).select("-password");

      if (!req.customer) {
        return res.status(401).json({ message: "Customer not found" });
      }

      return next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }

  return res.status(401).json({ message: "No token provided" });
};
