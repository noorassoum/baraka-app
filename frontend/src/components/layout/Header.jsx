import { FaArrowLeftLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = ({ title, onBack, showBurger = false, onBurgerClick }) => {
  return (
    <header className="flex items-center justify-between h-14 px-4 bg-neutral-100">
      {/* Back button */}
      <div className="w-8">
        {onBack && (
          <button
            onClick={onBack}
            aria-label="Go back"
            className="text-neutral-800 text-titleMedium font-medium"
          >
           <FaArrowLeftLong className="w-8 h-8 hover:text-teal-600 " />
          </button>
        )}
      </div>

      {/* Title */}
      <h1  className="text-base sm:text-lg md:text-2xl font-semibold text-center md:text-left">
        {title}
      </h1>

      {/* Right side: Burger menu or spacer */}
      <div className="w-8 flex justify-end">
        {showBurger && (
          <button
            aria-label="Open menu"
            onClick={onBurgerClick}
            className="text-neutral-800 text-titleMedium font-medium"
          >
            <RxHamburgerMenu className="w-7 h-7 hover:text-teal-600" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
