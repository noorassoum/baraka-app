import pastabox from "../../../../assets/pastabox.png";

export default function BoxSummaryCard() {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
      <img
        src={pastabox}
        alt="Chicken Pasta Box"
        className="w-20 h-20 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-neutral-900">
          Chicken Pasta Box
        </h3>

        <p className="text-sm text-neutral-500">
          Bella Ciao Restaurant
        </p>

        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
            3 Left
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-teal-100 text-teal-600">
            Meals
          </span>
        </div>
      </div>
    </div>
  );
}
