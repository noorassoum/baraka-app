import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";

import PageWrapper from "../../../components/layout/PageWrapper";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

import successBox from "../../../assets/successbox.png";
import { getLatestReservation } from "../../reservations/reservations.api";

export default function ReservationSuccess() {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const latest = await getLatestReservation();
        setReservation(latest);
      } catch (err) {
        console.error("Failed to load reservation", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, []);

  if (loading) {
    return (
      <PageWrapper className="flex items-center justify-center h-screen">
        Loading...
      </PageWrapper>
    );
  }

  if (!reservation) {
    return (
      <PageWrapper className="flex items-center justify-center h-screen">
        No reservation found.
      </PageWrapper>
    );
  }

  const { box, vendor, pickupTime } = reservation;

  return (
    <PageWrapper className="w-full">
      <div className="w-full max-w-md mx-auto px-4 flex flex-col items-center text-center">
        {/* Illustration */}
        <div className="mt-6 h-[180px] flex items-center justify-center">
          <img
            src={successBox}
            alt="Reservation confirmed"
            className="h-full object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="mt-5 text-headlineLarge font-bold text-neutral-900">
          Reservation Confirmed!
        </h1>

        <p className="mt-2 text-bodyMedium text-neutral-600">
          Your box is now reserved and ready for pickup.
        </p>

        {/* Order Card */}
        <Card className="mt-6 w-full flex items-center gap-3 p-4">
          <img
            src={box.image}
            alt={box.title}
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div className="flex-1 text-left">
            <h3 className="text-titleMedium font-semibold text-neutral-900">
              {box.title}
            </h3>

            <p className="text-bodySmall text-neutral-500">
              {vendor.businessName}
            </p>

            <div className="mt-2 flex gap-2">
              <Badge variant="error">
                {box.quantity} Left
              </Badge>
              <Badge variant="success">
                Meals
              </Badge>
            </div>
          </div>
        </Card>

        {/* Pickup Info */}
        <div className="mt-6 w-full space-y-4 text-left px-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-teal-500" />
            <p className="text-bodySmall text-neutral-700">
              Pickup: {pickupTime}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-teal-500" />
            <p className="text-bodySmall text-neutral-700">
              {vendor.location}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 w-full space-y-3">
          <Button
            fullWidth
            className="h-12 rounded-xl"
            onClick={() => navigate("/customer/reservationsList")}
          >
            View My Orders
          </Button>

          <Button
            fullWidth
            variant="outline"
            className="h-12 rounded-xl"
            onClick={() => navigate("/customer")}
          >
            Back Home
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
