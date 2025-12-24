import { useAuth } from "../../../context/AuthContext";

export default function VendorDashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold text-neutral-700">
        Vendor Dashboard (Coming Soon)
      </h1>

      <button
        onClick={logout}
        className="px-6 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-900 transition"
      >
        Logout
      </button>
    </div>
  );
}
