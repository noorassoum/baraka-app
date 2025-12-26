import { useNavigate } from "react-router-dom";

import ReserveHeader from "./components/ReserveHeader";
import BoxSummaryCard from "./components/BoxSummaryCard";
import PickupTime from "./components/PickupTime";
import QuantitySelector from "./components/QuantitySelector";
import PriceSummary from "./components/PriceSummary";
import PaymentMethod from "./components/PaymentMethod";
import ReserveBottomCTA from "./components/ReserveBottomCTA";

export default function ReserveBox() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      <ReserveHeader onBack={() => navigate(-1)} />

      {/* ADD TOP SPACE HERE */}
      <div className="mt-4 px-5 space-y-6">
        <BoxSummaryCard />
        <PickupTime />
        <QuantitySelector />
        <PriceSummary />
        <PaymentMethod />
      </div>

      <ReserveBottomCTA />
    </div>
  );
}
