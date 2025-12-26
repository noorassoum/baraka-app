export default function PricingSection() {
  return (
    <div className="space-y-4">
      {/* Section title */}
      <p className="text-sm font-medium text-[#1A1A1A]">
        Pricing
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-[#EDEEEE]" />

      {/* Price + Original Price (2 columns) */}
      <div className="grid grid-cols-2 gap-4">
        {/* Price */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-[#1A1A1A]">
            Price ($) <span className="text-[#E53935]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., 4.50"
            className="
              h-[44px]
              rounded-[12px]
              border border-[#DCDDDD]
              px-4
              text-sm
              text-center
              text-[#1A1A1A]
              placeholder:text-[#A8A9A9]
              focus:outline-none
            "
          />
        </div>

        {/* Original Price */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-[#1A1A1A]">
            Original Price ($)
          </label>
          <input
            type="text"
            placeholder="e.g., 12.00"
            className="
              h-[44px]
              rounded-[12px]
              border border-[#DCDDDD]
              px-4
              text-sm
              text-center
              text-[#1A1A1A]
              placeholder:text-[#A8A9A9]
              focus:outline-none
            "
          />
        </div>
      </div>

      {/* Available Quantity (full width) */}
      <div className="flex flex-col gap-1">
        <label className="text-[12px] text-[#1A1A1A]">
          Available Quantity <span className="text-[#E53935]">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g., 5"
          className="
            h-[44px]
            rounded-[12px]
            border border-[#DCDDDD]
            px-4
            text-sm
            text-center
            text-[#1A1A1A]
            placeholder:text-[#A8A9A9]
            focus:outline-none
          "
        />
      </div>
    </div>
  );
}
