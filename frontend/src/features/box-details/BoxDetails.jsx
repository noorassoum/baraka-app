import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BoxImageCarousel from "./components/BoxImageCarousel";
import BoxHeader from "./components/BoxHeader";
import BoxMeta from "./components/BoxMeta";
import BoxTabs from "./components/BoxTabs";
import BoxDescription from "./components/BoxDescription";
import PickupWindow from "./components/PickupWindow";
import BoxBottomCTA from "./components/BoxBottomCTA";

// images
import pastabox from "../../assets/pastabox.png";
import homebox from "../../assets/homebox.png";

export default function BoxDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      {/* Image carousel */}
      <BoxImageCarousel
        images={[pastabox, homebox]}
        onBack={() => navigate(-1)}
      />

      {/* Main content */}
      <div className="px-5 pt-5 space-y-6">
        <BoxHeader />
        <BoxMeta />

        {/* Tabs */}
        <BoxTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Tab content */}
        {activeTab === "description" && (
          <>
            <BoxDescription />
            <PickupWindow />
          </>
        )}

        {activeTab === "review" && (
          <div className="text-neutral-500 text-sm">
            Reviews coming soon.
          </div>
        )}
      </div>

      {/* Sticky bottom CTA */}
      <BoxBottomCTA />
    </div>
  );
}
