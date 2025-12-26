import { Clock } from "lucide-react";

export default function VendorPickupWindow() {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-neutral-900">
        Pickup Window
      </h2>

      <div className="flex items-center gap-2 text-sm text-neutral-600">
        <Clock size={16} className="text-teal-600" />
        <span>Today · 5:00 PM – 7:00 PM</span>
      </div>

      <p className="text-lg font-semibold text-orange-500">
        $4.50
      </p>
    </div>
  );
}
