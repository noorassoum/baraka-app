export default function BoxInformation() {
  return (
    <div className="space-y-4">
      {/* Section title */}
      <p className="text-sm font-medium text-[#1A1A1A]">
        Box Information
      </p>
      {/* Divider */}
      <div className="w-full h-px bg-[#EDEEEE]" />
      
      {/* Box Name */}
      <div className="flex flex-col gap-1">
        <label className="text-[12px] text-[#1A1A1A]">
           Box Name <span className="text-[#E53935]">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter box name"
          className="
            h-[44px]
            rounded-[12px]
            border border-[#DCDDDD]
            px-4
            text-sm
            text-[#1A1A1A]
            placeholder:text-[#A8A9A9]
            focus:outline-none
          "
        />
      </div>

      {/* Box Description */}
      <div className="flex flex-col gap-1">
        <label className="text-[12px] text-[#5A5B5B]">
          Box description
        </label>
        <textarea
          placeholder="Describe what’s inside the box"
          rows={4}
          className="
            rounded-[12px]
            border border-[#DCDDDD]
            px-4 py-3
            text-sm
            text-[#1A1A1A]
            placeholder:text-[#A8A9A9]
            resize-none
            focus:outline-none
          "
        />
      </div>

      {/* Box Category */}
      <div className="flex flex-col gap-1">
        <label className="text-[12px] text-[#5A5B5B]">
          Box category
        </label>
        <div
          className="
            h-[44px]
            rounded-[12px]
            border border-[#DCDDDD]
            px-4
            flex items-center
            text-sm
            text-[#A8A9A9]
          "
        >
          Select category
        </div>
      </div>
    </div>
  );
}
