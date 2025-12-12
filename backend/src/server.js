import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
import authRoutes from "./routes/auth.routes.js";
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import vendorRoutes from "./routes/vendor.routes.js";
import boxRoutes from "./routes/box.routes.js";
import reservationRoutes from "./routes/reservation.routes.js";

app.use("/api/vendors", vendorRoutes);
app.use("/api/boxes", boxRoutes);
app.use("/api/reservations", reservationRoutes);
