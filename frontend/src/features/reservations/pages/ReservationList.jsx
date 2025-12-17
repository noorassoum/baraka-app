import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsClock } from "react-icons/bs";

import Tabs from "../../../components/ui/Tabs.jsx";
import Header from "../../../components/layout/Header.jsx";
import PageWrapper from "../../../components/layout/PageWrapper.jsx";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Sidebar from "../../../components/layout/Sidebar.jsx";
import img from "../../../assets/react.svg";

const mockReservations = [
  {
    reservationId: "RES-001",
    boxName: "Chicken Pasta Box",
    restaurantName: "Bella Ciao Restaurant",
    boxImageUrl: img,
    status: "Reserved",
    pickupDate: "Nov 28",
    pickupStartTime: "5:00 PM",
    pickupEndTime: "7:00 PM",
    pickupAddress: "Bella Ciao Restaurant, Al Mina Street, Tripoli",
  },
];

const ReservationList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <PageWrapper>
        <Header
          title="My Orders"
          onBack={() => navigate("/reservation-success")}
          showBurger
          onBurgerClick={() => setIsSidebarOpen(true)}
        />

        {/* Tabs wrapper — mobile-safe override */}
        {/*<div className="mt-4 border-b border-neutral-200">*/}
         <div className="mt-4">
  <Tabs
    tabs={[
      { label: "Upcoming", value: "upcoming" },
      { label: "Past", value: "past" },
    ]}
    value={activeTab}
    onChange={setActiveTab}
  />
</div>

        {/*</div>*/}
        

        {/* Reservation list */}
        <div className="mt-6 space-y-4">
          {mockReservations.map((reservation) => (
            <Card key={reservation.reservationId} className="bg-white p-4">
  <div className="flex gap-3">
    {/* Image */}
    <img
      src={reservation.boxImageUrl}
      alt={reservation.boxName}
      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
    />

    {/* Content */}
    <div className="flex-1">
      {/* Box name */}
      <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
        {reservation.boxName}
      </h3>

      {/* Restaurant name */}
      <p className="text-xs text-neutral-500 mt-1">
        {reservation.restaurantName}
      </p>

      {/* Status badge */}
      <div className="mt-2">
        <Badge variant="teal" className="text-xs px-3 py-1">
          {reservation.status}
        </Badge>
      </div>

      {/* Divider */}
      <div className="my-3 border-t border-neutral-200" />

      {/* Pickup info */}
      <div className="space-y-2 text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <BsClock className="text-teal-600 text-sm" />
          <span>
            {reservation.pickupStartTime} – {reservation.pickupEndTime}
          </span>
        </div>

        <p className="leading-snug">
          {reservation.pickupAddress}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-3 flex justify-end">
        <button
          onClick={() =>
            navigate(`/reservations/${reservation.reservationId}`)
          }
          className="text-xs font-medium text-teal-600 hover:text-teal-800"
        >
          View Details →
        </button>
      </div>
    </div>
  </div>
</Card>

          ))}
        </div>
      </PageWrapper>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default ReservationList;
