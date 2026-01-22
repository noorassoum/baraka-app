export default function BoxBottomCTA({ price, onReserve, disabled }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-5 py-5 flex items-center justify-between">
      <span className="text-xl font-bold text-orange-500">
        ${price}
      </span>

      <button
        disabled={disabled}
        onClick={onReserve}
        className={`px-12 py-4 rounded-2xl font-semibold text-base ${
          disabled
            ? "bg-neutral-300 text-neutral-500"
            : "bg-teal-500 text-white"
        }`}
      >
        Reserve Box
      </button>
    </div>
  );
}
