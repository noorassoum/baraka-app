import { Heart } from "lucide-react";

export default function BoxHeader({ title, restaurant }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-xl font-semibold text-neutral-900">
          {title}
        </h1>
        <p className="text-sm text-neutral-600">
          {restaurant}
        </p>
      </div>

      <button className="text-teal-500">
        <Heart size={22} />
      </button>
    </div>
  );
}
