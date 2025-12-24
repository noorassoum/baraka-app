// CustomerRoutes.jsx
import { Routes, Route } from "react-router-dom";
import CustomerHome from "../customer/Home";
import Reservations from "../customer/Reservations";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="home" element={<CustomerHome />} />
      <Route path="reservations" element={<Reservations />} />
    </Routes>
  );
}
