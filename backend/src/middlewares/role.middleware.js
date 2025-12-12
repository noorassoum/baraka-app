export const requireVendor = (req, res, next) => {
  if (req.user.role !== "vendor")
    return res.status(403).json({ message: "Vendor role required" });
  next();
};

export const requireCustomer = (req, res, next) => {
  if (req.user.role !== "customer")
    return res.status(403).json({ message: "Customer role required" });
  next();
};
