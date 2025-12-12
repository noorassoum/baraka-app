import mongoose from "mongoose";

const boxSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },

  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  oldPrice: { type: Number },

  quantity: { type: Number, required: true },

  image: { type: String },

  pickupTime: { type: String },
  pickupDate: { type: String },

  status: { type: String, enum: ["available", "soldout", "hidden"], default: "available" },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Box", boxSchema);
