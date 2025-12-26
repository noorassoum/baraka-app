import { Clock } from "lucide-react";

export default function PickupTime() {
  return (
    <div className="bg-white rounded-2xl p-4 space-y-3">
      <h3 className="font-semibold text-neutral-900">
        Pickup Time
      </h3>

      <div className="flex items-center gap-3 text-neutral-700 text-sm">
        <div className="w-9 h-9 rounded-lg  flex items-center justify-center">
          <Clock className="w-5 h-5 text-teal-500" />
        </div>

        <span>Today · 5:00 PM – 7:00 PM</span>
      </div>
    </div>
  );
}
