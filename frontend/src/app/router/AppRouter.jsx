import { Routes, Route } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import VendorRoutes from "./VendorRoutes";
import ProtectedRoute from "./ProtectedRoute";

import Register from "../../features/auth/customer/Register";
import VendorLogin from "../../features/auth/vendor/VendorLogin";
import VendorRegister from "../../features/auth/vendor/VendorRegister";

import ProfileMain from "../../features/profile/ProfileMain";
import EditProfile from "../../features/profile/EditProfile";

export default function AppRouter() {
  return (
    <Routes>
      {/* Customer auth */}
      <Route path="/login" element={<AuthRoutes />} />
      <Route path="/register" element={<Register />} />

      {/* Vendor auth */}
      <Route path="/vendor/login" element={<VendorLogin />} />
      <Route path="/vendor/register" element={<VendorRegister />} />

      {/* Customer app */}
      <Route
        path="/customer/*"
        element={
          <ProtectedRoute>
            <CustomerRoutes />
          </ProtectedRoute>
        }
      />

      {/* Vendor app */}
      <Route
        path="/vendor/*"
        element={
          <ProtectedRoute>
            <VendorRoutes />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
