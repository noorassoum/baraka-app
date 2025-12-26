import { useNavigate } from "react-router-dom";

import VendorBoxImageCarousel from "./components/VendorBoxImageCarousel";
import VendorBoxMeta from "./components/VendorBoxMeta";
import VendorBoxDescription from "./components/VendorBoxDescription";
import VendorPickupWindow from "./components/VendorPickupWindow";
import VendorBoxActions from "./components/VendorBoxActions";

// images
import pastabox from "../../assets/pastabox.png";
import homebox from "../../assets/homebox.png";

export default function VendorBoxDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      {/* Image carousel WITH back icon */}
      <VendorBoxImageCarousel
        images={[pastabox, homebox]}
        onBack={() => navigate(-1)}
      />

      {/* Content */}
      <div className="px-5 pt-6 space-y-6">
        <VendorBoxMeta />

        <VendorBoxDescription />

        <VendorPickupWindow />
      </div>

      {/* Bottom actions */}
      <VendorBoxActions />
    </div>
  );
}
