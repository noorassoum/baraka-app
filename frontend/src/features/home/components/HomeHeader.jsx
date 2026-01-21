import barakaLogo from "../../../assets/barakalogo.png";

export default function HomeHeader({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <img
        src={barakaLogo}
        alt="Baraka"
        className="w-9"
      />

      <button
        type="button"
        onClick={onMenuClick}
        className="text-neutral-900 text-2xl focus:outline-none"
        aria-label="Open menu"
      >
        ☰
      </button>
    </header>
  );
}
