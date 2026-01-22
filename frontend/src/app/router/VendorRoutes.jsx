import { Routes, Route, Navigate } from "react-router-dom";

import VendorDashboard from "../../features/auth/vendor/VendorDashboard";
import VendorBoxDetails from "../../features/vendor-box-details/VendorBoxDetails";
import VendorReservationDetails from "../../features/vendor-reservations/VendorReservationDetails";
import ReservationsList from "../../features/reservations/pages/ReservationList";
import AddBox from "../../features/boxes/pages/add-box/AddBox";
import MyBoxes from "../../features/boxes/pages/my-boxes/MyBoxes";
import VendorNotifications from "../../features/vendor-notifications/VendorNotifications";
import VendorProfile from "../../features/vendor/VendorProfile";
import EditBox from "../../features/boxes/pages/EditBox";

export default function VendorRoutes() {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="dashboard" element={<VendorDashboard />} />

      {/* Boxes */}
      <Route path="boxes" element={<MyBoxes />} />
      <Route path="boxes/:id" element={<VendorBoxDetails />} />
      <Route path="edit-box/:id" element={<EditBox />} />
      <Route path="add-box" element={<AddBox />} />

      {/* Reservations */}
      <Route path="reservations" element={<ReservationsList />} />
      <Route path="reservations/:id" element={<VendorReservationDetails />} />

      {/* Notifications */}
      <Route path="notifications" element={<VendorNotifications />} />

      {/* Profile */}
      <Route path="profile" element={<VendorProfile />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/vendor/dashboard" replace />} />
    </Routes>
  );
}
