// frontend/src/app/router/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const DEV_MODE = true;

export default function ProtectedRoute({ children }) {
  // ✅ DEV: allow EVERYTHING
  if (DEV_MODE) {
    return children;
  }

  // ---- PRODUCTION LOGIC (later) ----
  const isAuthenticated = false;
  const user = null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
