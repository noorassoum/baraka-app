import { useState } from "react";

export default function PickupDetails() {
  const [pickupDate, setPickupDate] = useState("today");

  return (
    <div className="space-y-4">
      {/* ================= TITLE ================= */}
      <p className="text-sm font-medium text-[#1A1A1A]">
        Pickup Details
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-[#EDEEEE]" />

      {/* ================= PICKUP DATE ================= */}
      <div className="space-y-2">
        <label className="text-[12px] text-[#1A1A1A]">
         Pickup Date <span className="text-[#E53935]">*</span> 
         </label>


        <div className="flex gap-3">
          {/* Today */}
          <button
            type="button"
            onClick={() => setPickupDate("today")}
            className={`
              h-[36px]
              px-4
              rounded-[18px]
              text-[12px]
              flex items-center justify-center
              transition-colors
              ${
                pickupDate === "today"
                  ? "bg-[#2CB7AA] text-white"
                  : "border border-[#DCDDDD] text-[#5A5B5B]"
              }
            `}
          >
            Today
          </button>

          {/* Tomorrow */}
          <button
            type="button"
            onClick={() => setPickupDate("tomorrow")}
            className={`
              h-[36px]
              px-4
              rounded-[18px]
              text-[12px]
              flex items-center justify-center
              transition-colors
              ${
                pickupDate === "tomorrow"
                  ? "bg-[#2CB7AA] text-white"
                  : "border border-[#DCDDDD] text-[#5A5B5B]"
              }
            `}
          >
            Tomorrow
          </button>
        </div>
      </div>

      {/* ================= PICKUP TIME WINDOW ================= */}
      <div className="space-y-2">
        <label className="text-[12px] text-[#1A1A1A]">
          Pickup Time Window
        </label>

        <div className="grid grid-cols-2 gap-4">
          {/* Start Time */}
          <input
            type="time"
            className="
              h-[44px]
              rounded-[12px]
              border border-[#DCDDDD]
              px-4
              text-sm
              text-[#1A1A1A]
              focus:outline-none
              focus:border-[#2CB7AA]
              accent-[#2CB7AA]
            "
          />

          {/* End Time */}
          <input
            type="time"
            className="
              h-[44px]
              rounded-[12px]
              border border-[#DCDDDD]
              px-4
              text-sm
              text-[#1A1A1A]
              focus:outline-none
              focus:border-[#2CB7AA]
              accent-[#2CB7AA]
            "
          />
        </div>
      </div>
    </div>
  );
}
