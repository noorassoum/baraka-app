{/*import { useAuth } from "../../context/AuthContext";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import VendorRoutes from "./VendorRoutes";

export default function AppRouter() {
  const { user } = useAuth();

  if (!user) return <AuthRoutes />;

  if (user.role === "vendor") return <VendorRoutes />;
    
  return <CustomerRoutes />;
}*/}
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import VendorRoutes from "./VendorRoutes";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/*" element={<AuthRoutes />} />

      {/* Customer */}
      <Route
        path="/customer/*"
        element={
          <ProtectedRoute allowedRole="customer">
            <CustomerRoutes />
          </ProtectedRoute>
        }
      />

      {/* Vendor */}
      <Route
        path="/vendor/*"
        element={
          <ProtectedRoute allowedRole="vendor">
            <VendorRoutes />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
