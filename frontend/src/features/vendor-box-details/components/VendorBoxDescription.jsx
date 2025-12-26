export default function VendorBoxDescription() {
  return (
    <div className="space-y-3">
      {/* Title */}
      <h2 className="font-semibold text-neutral-900">
        Description
      </h2>

      {/* Divider directly under title */}
      <div className="h-px bg-neutral-200 w-full" />

      {/* Description text */}
      <p className="text-sm text-neutral-600 leading-relaxed">
        This box contains creamy chicken pasta with grilled chicken
        slices, mixed herbs, and a rich parmesan sauce.
      </p>
    </div>
  );
}
