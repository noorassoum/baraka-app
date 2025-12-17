import { Link} from "react-router-dom";
import { FaWhatsapp,FaInstagram } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {
  const isAuthenticated = false;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      
      <div
        className="absolute inset-0 bg-neutral-900/40"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside className="relative h-full w-72 bg-neutral-100 shadow-lg p-6 flex flex-col">
        <nav className="flex-1 space-y-4">
          <div className="border-b border-neutral-400 p-5 hover:text-teal-500" >
            <Link to="/profile">My Profile</Link>
          </div>
          <div className="border-b border-neutral-400 p-5 flex flex-col gap-5" >
            <Link to="/" className="hover:text-teal-500">Home</Link>
            <Link to="/boxes" className="hover:text-teal-500">Find Boxes</Link>
            <Link to="/notifications" className="hover:text-teal-500">Notification</Link>
          </div>
          <div className="border-b border-neutral-400 p-5 " >
            <Link to="/about" className="hover:text-teal-500">About</Link>
          </div>
          {isAuthenticated ? (
            <div className="pt-5">
              <button
              className="
                 inline-flex items-center justify-center
                 px-4 py-2
                 text-sm font-semibold
                 rounded-lg
                 border border-error-600
                 text-error-600
                 bg-transparent
                 hover:bg-error-600 hover:text-white
                transition-colors duration-200
               disabled:opacity-50 disabled:pointer-events-none "
                   onClick={onClose} >
             <Link to='/' className="flex"> <IoIosLogOut className="m-auto"/>  &nbsp; <span> Log Out </span></Link>
            </button>
            </div>
          ):<div className="flex flex-col items-center gap-4 pt-5">
           <button
              onClick={onClose}
              className="
              inline-flex items-center justify-center
                 px-10 py-2
                 text-sm font-semibold
                 rounded-lg
                 bg-teal-600
                 border border-teal-600
                 text-white
                 
                 hover:bg-white hover:text-teal-600
                transition-colors duration-200
               disabled:opacity-50 disabled:pointer-events-none
                "
            >
             <Link to='/register'> Sign Up</Link>
            </button>
             <button
              onClick={onClose}
              className="
              inline-flex items-center justify-center
                 px-10 py-2
                 text-sm font-semibold
                 rounded-lg
                 bg-white
                 border border-teal-600
                 text-teal-600
                 bg-transparent
                 hover:bg-teal-600 hover:text-white
                transition-colors duration-200
               disabled:opacity-50 disabled:pointer-events-none "
            >
             <Link to='/'> Login</Link>
            </button>
            </div>
          }
        </nav>

        {/* Footer — visible for both states */}
        <footer className="py-10 border-t border-neutral-300 text-1xl text-neutral-600">
          <p className="mb-2">For more information</p>
          <div className="flex">
            <BiDonateHeart className='text-teal-600' />
          <p>baraka.com</p>
          </div>
          <div className="flex">
            <FaWhatsapp className='text-teal-600' />
          <p>+961 76 398 419</p>
          </div>
          <div className="flex">
            <FaInstagram className='text-teal-600' />
          <p>baraka_</p>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
