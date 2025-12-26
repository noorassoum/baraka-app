import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiBell, FiLogOut, FiChevronRight, FiList } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { getMyProfile } from "./profile.api";

export default function ProfileMain() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [profile, setProfile] = useState({
    name: "—",
    email: "—",
    avatarUrl: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getMyProfile();
        setProfile(data);
      } catch {
        // If token missing or endpoint fails, keep placeholders
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto w-full max-w-[390px] px-6 pt-10">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="h-28 w-28 rounded-full bg-neutral-300 flex items-center justify-center overflow-hidden">
            {profile?.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt="avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <FiUser className="text-neutral-500" size={54} />
            )}
          </div>

          {/* Name + Email */}
          <div className="mt-5 text-center">
            <div className="text-headlineSmall font-semibold text-neutral-900">
              {profile?.name || "—"}
            </div>
            <div className="mt-1 text-bodySmall font-normal text-neutral-600">
              {profile?.email || "—"}
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/profile/edit")}
            className="w-full rounded-2xl bg-white px-4 py-4 shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FiUser className="text-neutral-700" size={18} />
              <span className="text-bodyMedium font-medium text-neutral-900">
                My Profile
              </span>
            </div>
            <FiChevronRight className="text-neutral-500" size={18} />
          </button>

          <button
            onClick={() => navigate("/customer/reservationsList")}
            className="w-full rounded-2xl bg-white px-4 py-4 shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FiList className="text-neutral-700" size={18} />
              <span className="text-bodyMedium font-medium text-neutral-900">
                My Orders
              </span>
            </div>
            <FiChevronRight className="text-neutral-500" size={18} />
          </button>

          <button
            onClick={() => navigate("/customer/notifications")}
            className="w-full rounded-2xl bg-white px-4 py-4 shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FiBell className="text-neutral-700" size={18} />
              <span className="text-bodyMedium font-medium text-neutral-900">
                Notifications
              </span>
            </div>
            <FiChevronRight className="text-neutral-500" size={18} />
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full rounded-2xl bg-white px-4 py-4 shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FiLogOut className="text-error-500" size={18} />
              <span className="text-bodyMedium font-medium text-error-500">
                Log Out
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
