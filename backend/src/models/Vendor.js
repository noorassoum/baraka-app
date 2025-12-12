import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  restaurantName: { type: String, required: true },

  address: { type: String },
  phone: { type: String },
  description: { type: String },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Vendor", vendorSchema);
