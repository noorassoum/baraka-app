import { Routes, Route } from "react-router-dom";
import VendorDashboard from "../../features/auth/vendor/VendorDashboard";

export default function VendorRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<VendorDashboard />} />
    </Routes>
  );
}
