export default function BoxInformation({ form, onChange }) {
  return (
    <div className="mt-8 space-y-5">
      {/* SECTION TITLE */}
      <h2 className="text-sm font-semibold text-neutral-900">
        Box information
      </h2>

      {/* Box name */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Box name *
        </label>
        <input
          value={form.title}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="e.g. Chicken Pasta Box"
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Box description *
        </label>
        <textarea
          value={form.description}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="Describe what's inside the box"
          rows={3}
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm resize-none"
        />
      </div>
    </div>
  );
}
