import { Routes, Route } from "react-router-dom";
import VendorDashboard from "../../features/auth/vendor/VendorDashboard";
import VendorBoxDetails from "../../features/vendor-box-details/VendorBoxDetails";
import VendorReservationDetails from "../../features/vendor-reservations/VendorReservationDetails";
import AddBox from "../../features/boxes/pages/add-box/AddBox";
import MyBoxes from "../../features/boxes/pages/my-boxes/MyBoxes";
import VendorNotifications from "../../features/vendor-notifications/VendorNotifications";
import VendorProfile from "../../features/vendor/VendorProfile"
import EditBox from "../../features/boxes/pages/EditBox";

export default function VendorRoutes() {
  return (
    <Routes>
      {/* Default vendor landing */}
      <Route path="dashboard" element={<VendorDashboard />} />

      {/* Boxes */}
      <Route path="boxes" element={<MyBoxes />} />
      <Route path="boxes/:id" element={<VendorBoxDetails />} />
      <Route path="edit-box/:id" element={<EditBox />} />
      <Route path="add-box" element={<AddBox />} />

      {/* Reservations */}
      <Route
        path="reservations/:id"
        element={<VendorReservationDetails />}
      />

      {/* Notifications */}
      <Route
        path="notifications"
        element={<VendorNotifications />}
      />

      {/* Profile */}
      <Route path="profile" element={<VendorProfile />} />
    </Routes>
  );
}
