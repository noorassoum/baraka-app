import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const increase = () => {
    setQty(qty + 1);
  };

  return (
    <div className="bg-white rounded-2xl p-4 space-y-3">
      <h3 className="font-semibold text-neutral-900">
        Quantity
      </h3>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrease}
          className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 text-lg font-semibold"
        >
          −
        </button>

        <span className="w-10 text-center font-semibold text-neutral-900">
          {qty}
        </span>

        <button
          onClick={increase}
          className="w-10 h-10 rounded-full bg-neutral-100 text-teal-500 text-lg font-semibold"
        >
          +
        </button>
      </div>
    </div>
  );
}
