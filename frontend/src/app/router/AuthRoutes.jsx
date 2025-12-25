// AuthRoutes.jsx

{/*import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../../features/auth/customer/Login";
import Register from "../../features/auth/customer/Register";

import VendorLogin from "../../features/auth/vendor/VendorLogin";
import VendorRegister from "../../features/auth/vendor/VendorRegister";

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/vendor/login" element={<VendorLogin />} />
            <Route path="/vendor/register" element={<VendorRegister />} />

           <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}*/}
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../features/auth/customer/Login";
import Register from "../../features/auth/customer/Register";

import VendorLogin from "../../features/auth/vendor/VendorLogin";
import VendorRegister from "../../features/auth/vendor/VendorRegister";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Vendor auth */}
      <Route path="vendor/login" element={<VendorLogin />} />
      <Route path="vendor/register" element={<VendorRegister />} />

      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}
