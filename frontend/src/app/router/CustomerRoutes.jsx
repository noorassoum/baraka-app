import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../features/home/Home";
import ReservationList from "../../features/reservations/pages/ReservationList";
import Notifications from "../../features/notifications/Notifications";
import AboutBaraka from "../../features/about/AboutBaraka";
import ReservationSuccess from "../../features/reservations/pages/ReservationSuccess";
import ProfileMain from "../../features/profile/ProfileMain";
import EditProfile from "../../features/profile/EditProfile";
import BoxDetails from "../../features/box-details/BoxDetails";
import ReserveBox from "../../features/reservations/reserve-box/ReserveBox";


export default function CustomerRoutes() {
  return (
    <Routes>
      {/* Default /customer */}
      <Route index element={<Home />} />

      {/* Pages */}
      <Route path="about" element={<AboutBaraka />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="reservationsList" element={<ReservationList />} />

      {/* Box details */}
      <Route path="boxes/:id" element={<BoxDetails />} />

      {/* Profile */}
      <Route path="profile" element={<ProfileMain />} />
      <Route path="profile/edit" element={<EditProfile />} />

      {/* Reservation */}
      <Route path="reservation/success" element={<ReservationSuccess />} />
      <Route path="reserve/:id" element={<ReserveBox />} />


      {/* Fallback */}
      <Route path="*" element={<Navigate to="/customer" replace />} />
    </Routes>
  );
}
