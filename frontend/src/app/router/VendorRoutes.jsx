// frontend/src/app/router/VendorRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// 🔹 TEMP placeholder screen
const Page = ({ title }) => (
  <div style={{ padding: 24 }}>
    <h2>{title}</h2>
    <p>Placeholder screen</p>
  </div>
);

export default function VendorRoutes() {
  return (
    <Routes>
      <Route
        path="/vendor/dashboard"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Vendor Dashboard" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/boxes"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Vendor Boxes" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/boxes/new"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Add New Box" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/boxes/:id"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Box Details" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/reservations"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Vendor Reservations" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/reservations/:id"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Reservation Details" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/notifications"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Notifications" />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/profile"
        element={
          <ProtectedRoute allowedRole="vendor">
            <Page title="Restaurant Profile" />
          </ProtectedRoute>
        }
      />

      {/* Default vendor route */}
      <Route path="*" element={<Navigate to="/vendor/dashboard" replace />} />
    </Routes>
  );
}
