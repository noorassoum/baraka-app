import { Heart } from "lucide-react";

export default function BoxHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-xl font-semibold text-neutral-900">
          Chicken Pasta Box
        </h1>
        <p className="text-sm text-neutral-600">
          Bella Ciao Restaurant
        </p>
      </div>

      <button className="text-teal-500">
        <Heart size={22} fill="currentColor" />
      </button>
    </div>
  );
}
