export default function VendorBoxActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-100 px-5 py-4">
      <div className="flex gap-3">
        {/* Edit */}
        <button className="
          flex-1 py-3 rounded-xl
          bg-teal-500 text-white font-semibold
          hover:bg-teal-600 transition
        ">
          Edit Box
        </button>

        {/* Close */}
        <button className="
          flex-1 py-3 rounded-xl
          border border-teal-500 text-teal-600 font-semibold
          hover:bg-teal-50 hover:border-teal-600 transition
        ">
          Close Box
        </button>

        {/* Delete */}
        <button className="
          flex-1 py-3 rounded-xl
          bg-error-500 text-white font-semibold
          hover:bg-error-600 transition
        ">
          Delete
        </button>
      </div>
    </div>
  );
}
