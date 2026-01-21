import mongoose from "mongoose";
import bcrypt from "bcrypt";

const vendorSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },

    // vendor-specific fields
   phone: { type: String, default: "" },
    location: { type: String, default: "" },

    bio: { type: String, default: "" },
    avatarUrl: { type: String, default: "" },
     
  },
  { timestamps: true }
);

// Hash password
vendorSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
vendorSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Vendor", vendorSchema);
