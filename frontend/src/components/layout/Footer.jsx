import barakaLogo from "../../assets/barakalogo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-200 border-t border-neutral-300">
      <div className="max-w-[640px] mx-auto px-4 py-8 text-center">

        <img
          src={barakaLogo}
          alt="Baraka Logo"
          className="mx-auto mb-3 w-[72px]"
        />

        <p className="text-bodySmall text-neutral-700 mb-4">
          Baraka helps you discover surplus meals and reduce food waste —
          one box at a time.
        </p>

        <div className="flex justify-center gap-6 text-labelMedium text-neutral-700 mb-4">
          <span className="cursor-pointer hover:text-neutral-900">About</span>
          <span className="cursor-pointer hover:text-neutral-900">Contact</span>
          <span className="cursor-pointer hover:text-neutral-900">Privacy</span>
          <span className="cursor-pointer hover:text-neutral-900">Terms</span>
        </div>

        <small className="block text-labelSmall text-neutral-500">
          © 2025 Baraka. All rights reserved.
        </small>

      </div>
    </footer>
  );
}
