import { Routes, Route } from "react-router-dom";
import VendorDashboard from "../../features/auth/vendor/VendorDashboard";
import VendorBoxDetails from "../../features/vendor-box-details/VendorBoxDetails";
import VendorProfile from "../../features/vendor/VendorProfile";


export default function VendorRoutes() {
  return (
    <Routes>
      {/* Default vendor landing */}
      <Route path="dashboard" element={<VendorDashboard />} />
      <Route path="profile" element={<VendorProfile />} />

      {/* Vendor box details */}
      <Route path="boxes/:id" element={<VendorBoxDetails />} />
    </Routes>
  );
}
