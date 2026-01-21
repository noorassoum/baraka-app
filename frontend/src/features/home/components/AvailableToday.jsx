import { useEffect, useState } from "react";
import BoxCard from "./BoxCard";
import { getAvailableBoxes } from "../../boxes/boxes.api";

export default function AvailableToday() {
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAvailableBoxes();
        setBoxes(data);
      } catch (err) {
        console.error("Failed to load boxes", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="px-4 py-6">
      <h2 className="font-semibold text-neutral-900 mb-4">
        Available Today
      </h2>

      {loading && (
        <p className="text-sm text-neutral-500">Loading boxes...</p>
      )}

      {!loading && boxes.length === 0 && (
        <p className="text-sm text-neutral-500">
          No boxes available today.
        </p>
      )}

      <div className="flex flex-col gap-6">
        {boxes.map((box) => (
          <BoxCard
            key={box._id}
            image={box.image}
            title={box.title}
            restaurant={box.vendor?.businessName}
            description={box.description}
            pickup={box.pickupTime}
            price={`$${box.discountedPrice}`}
            status={box.available ? "available" : "sold"}
            left={
              box.quantity > 0 ? `${box.quantity} Left` : null
            }
          />
        ))}
      </div>
    </section>
  );
}
