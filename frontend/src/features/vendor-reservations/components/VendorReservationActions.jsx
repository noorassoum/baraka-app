export default function VendorReservationActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-4 border-t border-neutral-200">
      <div className="flex gap-3">
        <button className="flex-1 py-3 rounded-xl bg-teal-500 text-white font-medium hover:bg-teal-600 transition">
          Marked as Picked up
        </button>

        <button className="flex-1 py-3 rounded-xl border border-red-500 text-red-500 font-medium hover:bg-red-50 transition">
          Cancel Reservation
        </button>
      </div>
    </div>
  );
}
