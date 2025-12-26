import avatar1 from "../../../assets/avatar1.jpg";
import avatar2 from "../../../assets/avatar2.jpg";
import avatar3 from "../../../assets/avatar3.jpg";

export default function BoxMeta() {
  return (
    <div className="space-y-4">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Chicken Pasta Box
        </h1>
        <p className="text-sm text-neutral-600 mt-1">
          Bella Ciao Restaurant
        </p>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-3">
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
          3 Left
        </span>
        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
          Meals
        </span>
      </div>

      {/* Rating + avatars */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="font-semibold text-neutral-900">4.5</span>
          <span className="text-neutral-500 text-sm">(28 reviews)</span>
        </div>

        <div className="flex -space-x-3">
          {[avatar1, avatar2, avatar3].map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
