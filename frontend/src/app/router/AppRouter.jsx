import { useAuth } from "../../context/AuthContext";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import VendorRoutes from "./VendorRoutes";

export default function AppRouter() {
  const { user } = useAuth();

  if (!user) return <AuthRoutes />;

  if (user.role === "vendor") return <VendorRoutes />;

  return <CustomerRoutes />;
}
