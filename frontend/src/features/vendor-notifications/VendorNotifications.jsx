import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Menu } from "lucide-react";

import NotificationTabs from "./components/NotificationTabs";
import NotificationCard from "./components/NotificationCard";
import EmptyNotifications from "./components/EmptyNotifications";

const TABS = ["All", "Reservations", "Boxes", "System"];

const notifications = [
  {
    id: 1,
    title: "New Reservation Received",
    description: "You received a reservation for Chicken Pasta Box",
    timeAgo: "10 minutes ago",
    section: "Today",
    category: "Reservations",
    type: "reservation",
  },
  {
    id: 2,
    title: "Box Sold Out",
    description: "Chicken Pasta Box is now sold out",
    timeAgo: "2 days ago",
    section: "Today",
    category: "Boxes",
    type: "sold_out",
  },
  {
    id: 3,
    title: "Pickup Completed",
    description: "John Doe picked up Chicken Pasta Box",
    timeAgo: "3 days ago",
    section: "This Week",
    category: "Boxes",
    type: "pickup_completed",
  },
  {
    id: 4,
    title: "System Update",
    description: "We added new features to the app",
    timeAgo: "1 month ago",
    section: "Earlier",
    category: "System",
    type: "system",
  },
];

export default function VendorNotifications() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  // FILTER
  const filtered =
    activeTab === "All"
      ? notifications
      : notifications.filter(
          (n) => n.category === activeTab
        );

  // GROUP
  const grouped = {
    Today: filtered.filter((n) => n.section === "Today"),
    "This Week": filtered.filter(
      (n) => n.section === "This Week"
    ),
    Earlier: filtered.filter((n) => n.section === "Earlier"),
  };

  // GLOBAL EMPTY
  if (notifications.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F8F7]">
        <div className="px-5">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <ArrowLeft
                className="w-5 h-5 cursor-pointer"
                onClick={() => navigate(-1)}
              />
              <h1 className="text-sm font-medium">
                Notifications
              </h1>
            </div>
            <Menu className="w-5 h-5" />
          </header>

          <EmptyNotifications />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8F7]">
      <div className="px-5">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <ArrowLeft
              className="w-5 h-5 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h1 className="text-sm font-medium">
              Notifications
            </h1>
          </div>

          <Menu className="w-5 h-5" />
        </header>

        {/* Tabs */}
        <div className="mt-4">
          <NotificationTabs
            tabs={TABS}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Notifications */}
        <div className="mt-6 space-y-6">
          {Object.entries(grouped).map(
            ([section, items]) =>
              items.length > 0 && (
                <div key={section}>
                  <p className="mb-3 text-[12px] font-medium text-[#5A5B5B]">
                    {section}
                  </p>

                  <div className="space-y-3">
                    {items.map((n) => (
                      <NotificationCard
                        key={n.id}
                        title={n.title}
                        description={n.description}
                        timeAgo={n.timeAgo}
                        type={n.type}
                      />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
