const Header = ({ title, onBack, showBurger = false }) => {
  return (
    <header className="flex items-center justify-between h-14 px-4 bg-neutral-100">
      {/* Left side: Back button or spacer */}
      <div className="w-8">
        {onBack && (
          <button
            onClick={onBack}
            aria-label="Go back"
            className="text-neutral-800 text-titleMedium font-medium"
          >
            ←
          </button>
        )}
      </div>

      {/* Title */}
      <h1 className="text-titleLarge font-semibold text-neutral-900 text-center flex-1">
        {title}
      </h1>

      {/* Right side: Burger menu or spacer */}
      <div className="w-8 flex justify-end">
        {showBurger && (
          <button
            aria-label="Open menu"
            className="text-neutral-800 text-titleMedium font-medium"
          >
            ☰
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
