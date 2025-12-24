import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../features/auth/customer/Home";

export default function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
           {/*} <Route path="*" element={<Navigate to="/home" />} />*/}
        </Routes>
    );
}