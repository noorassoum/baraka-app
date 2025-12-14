import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    box: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Box",
      required: true,
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    pickupTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["reserved", "cancelled", "completed"],
      default: "reserved",
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
