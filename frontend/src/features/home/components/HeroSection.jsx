import homeBox from "../../../assets/homebox.png";

export default function HeroSection() {
  return (
    <section className="text-center px-6 py-10">
      <img src={homeBox} alt="Surprise Box" className="mx-auto w-48 mb-6" />

      <h1 className="font-alexandria text-displaySmall font-bold text-neutral-900 mb-3">
        Discover Fresh<br />Meals, Anytime
      </h1>

      <p className="text-bodyMedium text-neutral-600 mb-6">
        Find surplus meals and surprise boxes available for pickup.
      </p>

      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold">
        Find Boxes
      </button>
    </section>
  );
}
