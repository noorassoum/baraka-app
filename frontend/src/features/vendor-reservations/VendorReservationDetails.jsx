import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getVendorReservations, completeReservation } from "../boxes/boxes.api";

import VendorReservationImage from "./components/VendorReservationImage";
import VendorReservationHeaderInfo from "./components/VendorReservationHeaderInfo";
import VendorReservationInfo from "./components/VendorReservationInfo";
import VendorReservationActions from "./components/VendorReservationActions";

export default function VendorReservationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const reservations = await getVendorReservations();
        const found = reservations.find((r) => r._id === id);
        setReservation(found);
      } catch (error) {
        console.error("Failed to load reservation", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  const handleComplete = async () => {
    try {
      await completeReservation(id);
      navigate("/vendor/reservations");
    } catch (error) {
      alert("Failed to complete reservation");
    }
  };

  if (loading) return <p className="p-5">Loading...</p>;
  if (!reservation) return <p className="p-5">Reservation not found</p>;

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      <div className="px-5 space-y-6">
        <VendorReservationImage image={reservation.box?.image} />
        <VendorReservationHeaderInfo reservation={reservation} />
        <VendorReservationInfo reservation={reservation} />
      </div>

      <VendorReservationActions
        status={reservation.status}
        onComplete={handleComplete}
      />
    </div>
  );
}
