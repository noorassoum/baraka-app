import { ArrowLeft } from "lucide-react";

export default function VendorHeader({ title = "Box Details", onBack }) {
  return (
    <div className="sticky top-0 z-10 bg-neutral-100">
      {/* Top safe spacing */}
      <div className="pt-4" />

      <div className="flex items-center gap-4 px-5 py-4">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-teal-600" />
        </button>

        {/* Title */}
        <h1 className="text-base font-semibold text-neutral-900">
          {title}
        </h1>
      </div>
    </div>
  );
}
