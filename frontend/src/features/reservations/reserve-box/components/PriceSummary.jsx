export default function PriceSummary({ price }) {
  return (
    <div className="bg-white rounded-2xl p-4 space-y-3">
      <div className="flex justify-between text-sm text-neutral-700">
        <span>Subtotal</span>
        <span>${price}</span>
      </div>

      <div className="flex justify-between text-sm text-neutral-500">
        <span>Service Fee</span>
        <span>$0.00</span>
      </div>

      <div className="h-px bg-neutral-200 my-2" />

      <div className="flex justify-between items-center">
        <span className="font-semibold text-neutral-900">
          Total
        </span>
        <span className="font-semibold text-orange-500 text-lg">
          ${price}
        </span>
      </div>
    </div>
  );
}
