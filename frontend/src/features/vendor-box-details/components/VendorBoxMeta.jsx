export default function VendorBoxMeta() {
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-semibold text-neutral-900">
        Chicken Pasta Box
      </h1>

      <p className="text-sm text-neutral-500">
        Bella Ciao Restaurant
      </p>

      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-medium">
          3 Left
        </span>

        <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-xs font-medium">
          Available
        </span>
      </div>
    </div>
  );
}
