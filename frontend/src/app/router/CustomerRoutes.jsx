import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../features/home/Home";
import ReservationList from "../../features/reservations/pages/ReservationList";
import Notifications from "../../features/notifications/Notifications";
import AboutBaraka from "../../features/about/AboutBaraka";
import ReservationSuccess from "../../features/reservations/pages/ReservationSuccess";
import ProfileMain from "../../features/profile/ProfileMain";
import EditProfile from "../../features/profile/EditProfile";

export default function CustomerRoutes() {
  return (
    <Routes>
      {/* ✅ DEFAULT /customer */}
      <Route index element={<Home />} />

      {/* Other customer pages */}
      <Route path="about" element={<AboutBaraka />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="reservationsList" element={<ReservationList />} />
      <Route path="/reservation/success" element={<ReservationSuccess />} />
      <Route path="/profile" element={<ProfileMain />} />
      <Route path="/profile/edit" element={<EditProfile />} />



      {/* Fallback */}
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
}
