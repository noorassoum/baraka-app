import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ---------------- IMPORT ROUTES ----------------
import authRoutes from "./src/routes/auth.routes.js";
import vendorRoutes from "./src/routes/vendorRoutes.js";
import boxRoutes from "./src/routes/boxRoutes.js";
import reservationRoutes from "./src/routes/reservation.routes.js";
import customerRoutes from "./src/routes/customerRoutes.js";

// ---------------- START SERVER AFTER DB CONNECTION ----------------
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // ✅ Wait for MongoDB to successfully connect
    console.log("MongoDB Connected");

    // ✅ Register routes ONLY after DB is connected
    app.use("/api/auth", authRoutes);
    app.use("/api/vendors", vendorRoutes);
    app.use("/api/boxes", boxRoutes);
    app.use("/api/reservations", reservationRoutes);
    app.use("/api/customers", customerRoutes);

    // Root test route
    app.get("/", (req, res) => {
      res.send("Baraka API is running...");
    });

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
