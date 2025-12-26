import barakaLogo from "../../../assets/barakalogo.png";

export default function HomeHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <img src={barakaLogo} alt="Baraka" className="w-9" />
      <button className="text-neutral-900 text-xl">☰</button>
    </div>
  );
}
