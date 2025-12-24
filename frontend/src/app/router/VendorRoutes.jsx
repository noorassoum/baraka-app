import { Routes, Route, Navigate } from "react-router-dom";
import VendorDashboard from "../../features/auth/vendor/VendorDashboard";

export default function VendorRoutes() {
  return (
    <Routes>
      <Route path="/vendor/dashboard" element={<VendorDashboard />} />
      <Route path="*" element={<Navigate to="/vendor/dashboard" />} />
    </Routes>
  );
}
