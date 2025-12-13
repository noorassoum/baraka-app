import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FaWhatsapp,FaInstagram } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

const guestMenuItems = [
  { label: "Home", path: "/" },
  { label: "Find Boxes", path: "/boxes" },
  { label: "About", path: "/about" },
  { label: "Sign Up", path: "/register" },
  { label: "Login", path: "/login" },
];

const authMenuItems = [
  { label: "My Profile", path: "/profile" },
  { label: "Home", path: "/" },
  { label: "Find Boxes", path: "/boxes" },
  { label: "My Orders", path: "/reservations" },
  { label: "Notifications", path: "/notifications" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (!isOpen) return null;

  const menuItems = isAuthenticated ? authMenuItems : guestMenuItems;

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-neutral-900/40"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside className="relative h-full w-72 bg-neutral-100 shadow-lg p-6 flex flex-col">
        <nav className="flex-1 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className="block text-bodyLarge text-neutral-900"
            >
              {item.label}
            </Link>
          ))}

          {isAuthenticated && (
            <button
              onClick={onClose}
              className="block text-bodyLarge text-neutral-900"
            >
              Log Out
            </button>
          )}
        </nav>

        {/* Footer — visible for both states */}
        <footer className="pt-6 border-t border-neutral-300 text-bodySmall text-neutral-600">
          <p className="mb-2">For more information</p>
          <div className="flex">
            <BiDonateHeart />
          <p>baraka.com</p>
          </div>
          <div className="flex">
            <FaWhatsapp />
          <p>+961 76 398 419</p>
          </div>
          <div className="flex">
            <FaInstagram />
          <p>baraka_</p>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
