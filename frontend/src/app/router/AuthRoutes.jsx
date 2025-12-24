// frontend/src/app/router/AuthRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

// EXISTING SCREENS (you already have these)
import Login from "../../features/auth/customer/Login";
import Register from "../../features/auth/customer/Register";
import AuthLayout from "../layouts/AuthLayout";



export default function AuthRoutes() {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <AuthLayout>
                        <Login />
                    </AuthLayout>
                }
            />

            <Route
                path="/register"
                element={
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                }
            />

            {/* Default auth route */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
