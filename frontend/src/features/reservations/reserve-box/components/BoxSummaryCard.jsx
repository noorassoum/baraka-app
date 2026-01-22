export default function BoxSummaryCard({ box }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
      <img
        src={box.image || "/placeholder.png"}
        alt={box.title}
        className="w-20 h-20 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-neutral-900">
          {box.title}
        </h3>

        <p className="text-sm text-neutral-500">
          {box.vendor?.businessName}
        </p>

        <div className="flex gap-2 mt-2">
          <span className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
            {box.quantity} Left
          </span>

          <span className="px-3 py-1 rounded-full text-xs bg-teal-100 text-teal-600">
            Meals
          </span>
        </div>
      </div>
    </div>
  );
}
