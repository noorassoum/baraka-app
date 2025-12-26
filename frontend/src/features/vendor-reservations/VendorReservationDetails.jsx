import VendorReservationImage from "./components/VendorReservationImage";
import VendorReservationHeaderInfo from "./components/VendorReservationHeaderInfo";
import VendorReservationInfo from "./components/VendorReservationInfo";
import VendorReservationActions from "./components/VendorReservationActions";

export default function VendorReservationDetails() {
  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      <div className="px-5 space-y-6">
        {/* Image */}
        <VendorReservationImage />

        {/* Title + restaurant + price */}
        <VendorReservationHeaderInfo />

        {/* Reservation info card */}
        <VendorReservationInfo />
      </div>

      {/* Bottom actions */}
      <VendorReservationActions />
    </div>
  );
}
