import { useNavigate } from "react-router-dom";

import PageWrapper from "../../../components/layout/PageWrapper";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

import successBox from "../../../assets/successbox.png";

/* ---------- MOCK DATA ---------- */
const reservationData = {
  item: {
    title: "Chicken Pasta Box",
    restaurant: "Bella Ciao Restaurant",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    leftCount: 3,
    tag: "Meals",
  },
  pickup: "Today · 5:00 PM – 7:00 PM",
  address: "Bella Ciao Restaurant, Al Mina Street, Tripoli",
};
/* ------------------------------- */

export default function ReservationSuccess() {
    const navigate = useNavigate();
  return (
    <PageWrapper className="flex flex-col items-center text-center px-4">
      {/* Illustration */}
    <div className="mt-6 w-full h-[180px] flex items-center justify-center">
  <img
    src={successBox}
    alt="Reservation confirmed"
    className="h-full w-auto object-contain"
  />
</div>

      {/* Title */}
      <h1 className="mt-5 text-headlineLarge font-bold text-neutral-900">
        Reservation Confirmed!
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-bodyMedium text-neutral-600 max-w-[260px] text-center">
  Your box is now reserved and will be
  <span className="block">ready for pickup.</span>
</p>


      {/* Card */}
      <Card className="mt-6 w-full flex items-center gap-3 p-4">
        <img
          src={reservationData.item.image}
          alt={reservationData.item.title}
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div className="flex-1 text-left">
          <h3 className="text-titleMedium font-semibold text-neutral-900">
            {reservationData.item.title}
          </h3>
          <p className="mt-0.5 text-bodySmall text-neutral-500">
            {reservationData.item.restaurant}
          </p>

          <div className="mt-2 flex gap-2">
            <Badge variant="error">
              {reservationData.item.leftCount} Left
            </Badge>
            <Badge variant="success">
              {reservationData.item.tag}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Pickup Info */}
      <div className="mt-6 w-full space-y-4 text-left">
        <div className="flex items-center gap-3">
          <span className="text-teal-500">🕒</span>
          <p className="text-bodySmall text-neutral-700">
            Pickup: {reservationData.pickup}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-teal-500">📍</span>
          <p className="text-bodySmall text-neutral-700">
            {reservationData.address}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 w-full space-y-3">
        <Button fullWidth className="h-12 rounded-xl text-base font-medium">
          View My Orders
        </Button>

        <Button
          fullWidth
          variant="outline"
          className="h-12 rounded-xl text-base font-medium"
          onClick={() => navigate("/customer")}
        >
          Back Home
        </Button>
      </div>
    </PageWrapper>
  );
}
