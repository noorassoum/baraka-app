import pastabox from "../../../assets/pastabox.png";

export default function VendorReservationImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-white">
      <img
        src={pastabox}
        alt="Chicken Pasta Box"
        className="w-full h-52 object-cover"
      />

      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-700">
        Meals
      </span>
    </div>
  );
}
