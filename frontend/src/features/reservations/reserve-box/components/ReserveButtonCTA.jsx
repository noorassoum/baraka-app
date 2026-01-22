export default function ReserveButtonCTA({ onReserve }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-5 py-4">
      <button
        onClick={onReserve}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-2xl text-base"
      >
        Reserve Now
      </button>
    </div>
  );
}
