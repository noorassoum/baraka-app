import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BoxImageCarousel from "./components/BoxImageCarousel";
import BoxHeader from "./components/BoxHeader";
import BoxMeta from "./components/BoxMeta";
import BoxTabs from "./components/BoxTabs";
import BoxDescription from "./components/BoxDescription";
import PickupWindow from "./components/PickupWindow";
import BoxBottomCTA from "./components/BoxBottomCTA";
import { getBoxById } from "../boxes/boxes.api";

export default function BoxDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [box, setBox] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBoxById(id)
      .then(setBox)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!box) return <div className="p-10">Box not found</div>;

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      <BoxImageCarousel
        images={[box.image]}
        onBack={() => navigate(-1)}
      />

      <div className="px-5 pt-5 space-y-6">
        <BoxHeader
          title={box.title}
          restaurant={box.vendor.businessName}
        />

        <BoxMeta quantity={box.quantity} />

        <BoxTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "description" && (
          <>
            <BoxDescription description={box.description} />
            <PickupWindow pickupTime={box.pickupTime} />
          </>
        )}
      </div>

      <BoxBottomCTA
        price={box.discountedPrice}
        disabled={!box.available}
        onReserve={() => navigate(`/customer/reserve/${box._id}`)}
      />
    </div>
  );
}
