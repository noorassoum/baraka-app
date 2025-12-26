import { ArrowLeft } from "lucide-react";

export default function ReserveHeader({ onBack }) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 bg-neutral-100">
      <button
        onClick={onBack}
        className="p-2 rounded-full bg-neutral-100"
      >
        <ArrowLeft size={18} />
      </button>

      <h1 className="font-semibold text-neutral-900">
        Reserve Box
      </h1>
    </div>
  );
}
