import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationList from "./features/reservations/pages/ReservationList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>HOME WORKS</div>} />
        <Route path="/reservation" element={<ReservationList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
