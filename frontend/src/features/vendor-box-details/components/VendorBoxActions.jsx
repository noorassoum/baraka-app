export default function VendorBoxActions({ onEdit, onDelete }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex gap-3 border-t">
      <button
        onClick={onEdit}
        className="flex-1 rounded-xl border border-teal-500 text-teal-500 py-3 font-medium"
      >
        Edit
      </button>

      <button
        onClick={onDelete}
        className="flex-1 rounded-xl bg-red-500 text-white py-3 font-medium"
      >
        Delete
      </button>
    </div>
  );
}
