import { Clock } from "lucide-react";

export default function PickupWindow({ pickupTime }) {
  return (
    <div className="flex gap-3 items-start">
      <Clock className="text-teal-500 mt-1" size={18} />
      <div>
        <p className="font-medium text-neutral-900">
          Pickup Window
        </p>
        <p className="text-sm text-neutral-600">
          {pickupTime}
        </p>
      </div>
    </div>
  );
}
