import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  boxId: { type: mongoose.Schema.Types.ObjectId, ref: "Box", required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },

  status: {
    type: String,
    enum: ["reserved", "pickedup", "cancelled"],
    default: "reserved"
  },

  reservedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Reservation", reservationSchema);
