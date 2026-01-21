export default function AddBoxActions({ onSave, onCancel, loading }) {
  return (
    <div className="mt-10 space-y-3">
      <button
        onClick={onSave}
        disabled={loading}
        className="w-full h-[44px] rounded-xl bg-[#2CB7AA] text-white text-sm font-medium disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save"}
      </button>

      <button
        onClick={onCancel}
        className="w-full h-[44px] rounded-xl border border-[#2CB7AA] text-[#2CB7AA] text-sm font-medium"
      >
        Cancel
      </button>
    </div>
  );
}
