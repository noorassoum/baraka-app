import { Routes, Route } from "react-router-dom";
import VendorDashboard from "../../features/auth/vendor/VendorDashboard";
import VendorBoxDetails from "../../features/vendor-box-details/VendorBoxDetails";
import VendorReservationDetails from "../../features/vendor-reservations/VendorReservationDetails";
import AddBox from "../../features/boxes/pages/add-box/AddBox";
import VendorProfile from "../../features/vendor/VendorProfile"



export default function VendorRoutes() {
  return (
    <Routes>
      {/* Default vendor landing */}
      <Route path="dashboard" element={<VendorDashboard />} />

      <Route path="add-box" element={<AddBox />} />

      {/* Vendor box details */}
      <Route path="boxes/:id" element={<VendorBoxDetails />} />

      {/* Vendor reservation details */}
      <Route
        path="reservations/:id"
        element={<VendorReservationDetails />}
      />

      {/*Vendor profile */}
      <Route path="profile" element={<VendorProfile />} />

    </Routes>


  );
}
