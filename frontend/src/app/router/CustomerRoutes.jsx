import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../features/home/Home";
import ReservationList from "../../features/reservations/pages/ReservationList";
import Notifications from "../../features/notifications/Notifications";
import AboutBaraka from "../../features/about/AboutBaraka";

export default function CustomerRoutes() {
  return (
    <Routes>
      {/* ✅ DEFAULT /customer */}
      <Route index element={<Home />} />

      {/* Other customer pages */}
      <Route path="about" element={<AboutBaraka />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="reservationsList" element={<ReservationList />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
}
