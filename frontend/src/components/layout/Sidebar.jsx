import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    onClose();
    navigate("/login");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-neutral-900/40"
        onClick={onClose}
      />

      <aside className="relative h-full w-72 bg-neutral-100 shadow-lg p-6 flex flex-col">
        <nav className="flex-1 space-y-4">

          {isAuthenticated && (
            <div className="border-b border-neutral-400 p-5 hover:text-teal-500">
              <Link to="/customer/profile" onClick={onClose}>
                My Profile
              </Link>
            </div>
          )}

          <div className="border-b border-neutral-400 p-5 flex flex-col gap-5">
            <Link to="/customer" onClick={onClose} className="hover:text-teal-500">
              Home
            </Link>

            <Link to="/boxes" onClick={onClose} className="hover:text-teal-500">
              Find Boxes
            </Link>

            {isAuthenticated && (
              <Link
                to="/customer/notifications"
                onClick={onClose}
                className="hover:text-teal-500"
              >
                Notifications
              </Link>
            )}
          </div>

          <div className="border-b border-neutral-400 p-5">
            <Link to="/customer/about" onClick={onClose} className="hover:text-teal-500">
              About
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="pt-5">
              <button
                onClick={logout}
                className="
                  inline-flex items-center gap-2
                  px-4 py-2 text-sm font-semibold
                  rounded-lg
                  border border-error-600 text-error-600
                  hover:bg-error-600 hover:text-white
                  transition
                "
              >
                <IoIosLogOut />
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 pt-5">
              <button
                onClick={() => {
                  onClose();
                  navigate("/register");
                }}
                className="
                  px-10 py-2 text-sm font-semibold
                  rounded-lg
                  bg-teal-600 text-white
                  hover:bg-white hover:text-teal-600
                  border border-teal-600
                  transition
                "
              >
                Sign Up
              </button>

              <button
                onClick={() => {
                  onClose();
                  navigate("/login");
                }}
                className="
                  px-10 py-2 text-sm font-semibold
                  rounded-lg
                  bg-white text-teal-600
                  border border-teal-600
                  hover:bg-teal-600 hover:text-white
                  transition
                "
              >
                Login
              </button>
            </div>
          )}
        </nav>

        <footer className="py-10 border-t border-neutral-300 text-neutral-600">
          <p className="mb-2">For more information</p>
          <div className="flex items-center gap-2">
            <BiDonateHeart className="text-teal-600" />
            <span>baraka.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-teal-600" />
            <span>+961 76 398 419</span>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram className="text-teal-600" />
            <span>baraka_</span>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
