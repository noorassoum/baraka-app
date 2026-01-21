import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsClock } from "react-icons/bs";

import Tabs from "../../../components/ui/Tabs.jsx";
import Header from "../../../components/layout/Header.jsx";
import PageWrapper from "../../../components/layout/PageWrapper.jsx";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Sidebar from "../../../components/layout/Sidebar.jsx";

import { useReservations } from "../useReservations";

const ReservationList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    upcoming,
    past,
    loading,
    fetchUpcoming,
    fetchPast,
  } = useReservations();

  useEffect(() => {
    if (activeTab === "upcoming") {
      fetchUpcoming();
    } else {
      fetchPast();
    }
  }, [activeTab]);

  const reservations =
    activeTab === "upcoming" ? upcoming : past;

  return (
    <>
      <PageWrapper>
        <Header
          title="My Orders"
          onBack={() => navigate("/reservation-success")}
          showBurger
          onBurgerClick={() => setIsSidebarOpen(true)}
        />

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

        <div className="mt-6 space-y-4">
          {loading && (
            <p className="text-center text-sm text-neutral-500">
              Loading reservations…
            </p>
          )}

          {!loading &&
            reservations.map((reservation) => (
              <Card
                key={reservation._id}
                className="bg-white p-4"
              >
                <div className="flex gap-3">
                  <img
                    src={reservation.box?.image}
                    alt={reservation.box?.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {reservation.box?.title}
                    </h3>

                    <p className="text-xs text-neutral-500 mt-1">
                      {reservation.box?.vendor?.businessName}
                    </p>

                    <div className="mt-2">
                      <Badge variant="teal" className="text-xs px-3 py-1">
                        {reservation.status}
                      </Badge>
                    </div>

                    <div className="my-3 border-t border-neutral-200" />

                    <div className="space-y-2 text-xs text-neutral-600">
                      <div className="flex items-center gap-2">
                        <BsClock className="text-teal-600 text-sm" />
                        <span>{reservation.pickupTime}</span>
                      </div>

                      <p>{reservation.vendor?.location}</p>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() =>
                          navigate(`/reservations/${reservation._id}`)
                        }
                        className="text-xs font-medium text-teal-600"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

          {!loading && reservations.length === 0 && (
           <div className="flex min-h-screen items-center justify-center">
  <p className="relative -top-8 text-center text-base text-neutral-500">
    No reservations found.
  </p>
</div>

          )}
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
