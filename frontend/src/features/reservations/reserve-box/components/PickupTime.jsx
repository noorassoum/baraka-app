import { Clock } from "lucide-react";

export default function PickupTime({ pickupTime }) {
  return (
    <div className="bg-white rounded-2xl p-4 space-y-3">
      <h3 className="font-semibold text-neutral-900">
        Pickup Time
      </h3>

      <div className="flex items-center gap-3 text-neutral-700 text-sm">
        <Clock className="w-5 h-5 text-teal-500" />
        <span>{pickupTime}</span>
      </div>
    </div>
  );
}
