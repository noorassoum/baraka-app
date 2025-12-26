export default function BoxCard({
  image,
  title,
  restaurant,
  description,
  pickup,
  price,
  status,
  left,
}) {
  const isSoldOut = status === "sold";

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* LEFT CHIP */}
        {left && (
          <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-sm px-3 py-1.5 rounded-full font-medium">
            {left}
          </span>
        )}

        {/* CATEGORY CHIP */}
        <span className="absolute top-3 right-3 bg-teal-100 text-teal-600 text-sm px-3 py-1.5 rounded-full font-medium">
          Meals
        </span>

        {/* SOLD OUT OVERLAY */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-black/40 flex items-start p-3">
            <span className="bg-red-500 text-white text-sm px-3 py-1.5 rounded-full font-medium">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 mb-1">{title}</h3>
        <p className="text-sm text-neutral-600 mb-2">{restaurant}</p>

        <p className="text-sm text-neutral-600 mb-3">{description}</p>

        <p className="text-xs text-neutral-500 mb-4">
          ⏱ Pickup: {pickup}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-orange-500">{price}</span>

          <button
            disabled={isSoldOut}
            className={`px-4 py-2 rounded-xl text-sm font-semibold ${
              isSoldOut
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-600"
            }`}
          >
            {isSoldOut ? "Not Available" : "View Box"}
          </button>
        </div>
      </div>
    </div>
  );
}
