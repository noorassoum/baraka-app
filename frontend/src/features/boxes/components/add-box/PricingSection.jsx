export default function PricingSection({ form, onChange }) {
  return (
    <div className="mt-8 space-y-5">
      {/* SECTION TITLE */}
      <h2 className="text-sm font-semibold text-neutral-900">
        Pricing
      </h2>

      {/* Discounted price */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Discounted price ($) *
        </label>
        <input
          type="number"
          value={form.discountedPrice}
          onChange={(e) =>
            onChange("discountedPrice", e.target.value)
          }
          placeholder="e.g. 4.50"
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
      </div>

      {/* Original price */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Original price ($) *
        </label>
        <input
          type="number"
          value={form.originalPrice}
          onChange={(e) =>
            onChange("originalPrice", e.target.value)
          }
          placeholder="e.g. 12.00"
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-xs font-medium text-neutral-600 mb-1">
          Available quantity *
        </label>
        <input
          type="number"
          value={form.quantity}
          onChange={(e) =>
            onChange("quantity", e.target.value)
          }
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm"
        />
      </div>
    </div>
  );
}
