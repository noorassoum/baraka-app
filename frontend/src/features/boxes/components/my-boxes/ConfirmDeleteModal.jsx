export default function ConfirmDeleteModal({
  open,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-6">
      <div className="bg-white rounded-[16px] w-full max-w-[320px] p-4">
        <p className="text-[14px] font-medium text-[#1A1A1A]">
          Delete Box?
        </p>

        <p className="mt-1 text-[12px] text-[#5A5B5B]">
          This action cannot be undone.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 h-[32px] rounded-[8px] text-[12px] bg-[#EDEEEE]"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 h-[32px] rounded-[8px] text-[12px] bg-[#E53935] text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
