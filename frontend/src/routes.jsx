// frontend/src/routes.jsx
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
