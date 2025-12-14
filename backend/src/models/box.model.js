import mongoose from "mongoose";

const boxSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    pickupTime: {
      type: String, // Example: "5 PM - 7 PM"
      required: true,
    },
    image: {
      type: String, // optional for now
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Box", boxSchema);
