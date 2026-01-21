export default function PickupDetails({ form, onChange }) {
  return (
    <div className="mt-8 space-y-5">
      {/* SECTION TITLE */}
      <h2 className="text-sm font-semibold text-neutral-900">
        Pickup details
      </h2>

      {/* From time */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Pickup from *
        </label>
        <input
          type="time"
          value={form.fromTime}
          onChange={(e) => onChange("fromTime", e.target.value)}
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
      </div>

      {/* To time */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Pickup until *
        </label>
        <input
          type="time"
          value={form.toTime}
          onChange={(e) => onChange("toTime", e.target.value)}
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
      </div>
    </div>
  );
}
