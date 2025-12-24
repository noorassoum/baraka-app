import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../features/auth/customer/Login";
import Register from "../../features/auth/customer/Register";
import Home from "../layouts/Home.jsx";
import { useAuth } from "../../context/AuthContext";

export default function AppRouter() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  console.log("AUTH USER:", user);

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
}
