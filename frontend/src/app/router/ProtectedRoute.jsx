// frontend/src/app/router/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

/**
 * TEMP auth hook
 * (will be replaced by auth.store later)
 */
const useAuth = () => {
  return {
    isAuthenticated: false, // toggle later for testing
    user: null, // { role: "customer" | "vendor" }
  };
};

export default function ProtectedRoute({ children, allowedRole }) {
  const { isAuthenticated, user } = useAuth();

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but wrong role
  if (allowedRole && user?.role !== allowedRole) {
    if (user?.role === "customer") {
      return <Navigate to="/customer/home" replace />;
    }

    if (user?.role === "vendor") {
      return <Navigate to="/vendor/dashboard" replace />;
    }
  }

  // Allowed
  return children;
}
