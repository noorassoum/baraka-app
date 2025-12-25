import { Routes, Route } from "react-router-dom";
import Home from "../../features/auth/customer/Home";
import ReservationList from "../../features/reservations/pages/ReservationList";
import Notifications from "../../features/notifications/Notifications";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="reservationsList" element={<ReservationList />} />
      <Route path="notifications" element={<Notifications />} />
    </Routes>
  );
}
