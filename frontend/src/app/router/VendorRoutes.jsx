import { Routes, Route } from "react-router-dom";
import VendorDashboard from "../../features/auth/vendor/VendorDashboard";
import AddBox from "../../features/boxes/pages/add-box/AddBox";

export default function VendorRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<VendorDashboard />} />
      <Route path="add-box" element={<AddBox />} />
    </Routes>
  );
}
