import { CreditCard } from "lucide-react";

export default function PaymentMethod() {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-neutral-900">
        Payment Method
      </h3>

      <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg  flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-teal-500" />
          </div>

          <span className="font-medium text-neutral-900">
            Pay at Pickup
          </span>
        </div>

        <span className="text-neutral-400 text-lg">›</span>
      </div>
    </div>
  );
}
