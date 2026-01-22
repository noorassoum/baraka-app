import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ReserveHeader from "./components/ReserveHeader";
import BoxSummaryCard from "./components/BoxSummaryCard";
import PickupTime from "./components/PickupTime";
import QuantitySelector from "./components/QuantitySelector";
import PriceSummary from "./components/PriceSummary";
import ReserveButtonCTA from "./components/ReserveButtonCTA";

import { getBoxById, reserveBox } from "../../boxes/boxes.api";

export default function ReserveBox() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [box, setBox] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBox = async () => {
      try {
        const data = await getBoxById(id);
        setBox(data);
      } catch (err) {
        console.error("Failed to load box", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBox();
  }, [id]);

  const handleReserve = async () => {
    try {
      await reserveBox(box._id);
      navigate("/customer/reservation/success", {
        state: { box },
      });
    } catch (err) {
      alert(err.response?.data?.message || "Reservation failed");
    }
  };

  if (loading) return <div className="p-5">Loading...</div>;
  if (!box) return <div className="p-5">Box not found</div>;

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      <ReserveHeader onBack={() => navigate(-1)} />

      <div className="mt-4 px-5 space-y-6">
        <BoxSummaryCard box={box} />
        <PickupTime pickupTime={box.pickupTime} />
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <PriceSummary price={box.discountedPrice} quantity={quantity} />
      </div>

      <ReserveButtonCTA onReserve={handleReserve} />
    </div>
  );
}
