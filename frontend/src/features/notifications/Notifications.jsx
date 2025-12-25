import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

import { FaCheck } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineCog } from "react-icons/hi";
import { BsBell } from "react-icons/bs";

/* ---------------- MOCK DATA ---------------- */

// Toggle this to [] to see EMPTY state
const notifications = [
  {
    section: "Today",
    items: [
      {
        id: 1,
        title: "Order Confirmed",
        description: "Your order #84293 is confirmed.",
        time: "2 Hours Ago",
        icon: <FaCheck />,
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
      },
      {
        id: 2,
        title: "Special Offer",
        description: "Get 20% off your next box.",
        time: "5 Hours Ago",
        icon: <FiGift />,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
      },
    ],
  },
  {
    section: "This Week",
    items: [
      {
        id: 3,
        title: "Pickup Reminder",
        description: "Your box is ready at Bella Ciao.",
        time: "3 days ago",
        icon: <MdOutlineAccessTime />,
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
      },
    ],
  },
  {
    section: "Earlier",
    items: [
      {
        id: 4,
        title: "System Update",
        description: "We added new features to the app.",
        time: "1 month ago",
        icon: <HiOutlineCog />,
        iconBg: "bg-neutral-200",
        iconColor: "text-neutral-600",
      },
    ],
  },
];

const hasNotifications = notifications.length > 0 ;

/* ---------------- COMPONENT ---------------- */

const Notifications = ({ onBack }) => {
  const navigate = useNavigate();
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // If parent provides onBack → use it
  // Otherwise → fallback to router back
  const handleBack = onBack ?? (() => navigate(-1));

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header
        title="Notifications"
        onBack={handleBack}
        showBurger
        onBurgerClick={() => setIsSidebarOpen(true)}
      />
       <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {hasNotifications ? <NotificationList /> : <EmptyState />}
    </div>
  );
};

export default Notifications;

/* ---------------- SUB COMPONENTS ---------------- */

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center px-6 mt-24 text-center">
    <BsBell className="w-16 h-16 text-neutral-400 mb-6" />

    <p className="text-bodyLarge font-semibold text-neutral-800 mb-2">
      No Notifications Yet
    </p>

    <p className="text-bodySmall text-neutral-600 max-w-xs">
      We’ll let you know when something important happens.
    </p>
  </div>
);

const NotificationList = () => (
  <div className="px-4 pt-4">
    {/* Filters */}
    <div className="flex gap-2 mb-4">
      {["All", "Orders", "Offers"].map((item, index) => (
       <button
  key={item}
  className={`px-5 h-10 flex items-center justify-center rounded-full text-bodyMedium font-medium ${
    index === 0
      ? "bg-teal-500 text-white"
      : "bg-neutral-200 text-neutral-700"
  }`}
>
  {item}
</button>

      ))}
    </div>

    {/* Sections */}
    {notifications.map((group) => (
      <div key={group.section} className="mb-6">
        <p className="text-bodySmall font-medium text-neutral-600 mb-2">
          {group.section}
        </p>

        <div className="space-y-3">
          {group.items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-4 bg-white rounded-xl shadow-xs"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <p className="text-bodyMedium font-semibold text-neutral-800">
                  {item.title}
                </p>
                <p className="text-bodySmall text-neutral-600">
                  {item.description}
                </p>
                <p className="text-labelSmall text-neutral-500 mt-1">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);