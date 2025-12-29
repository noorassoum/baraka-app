export default function NotificationTabs({
  tabs = ["All", "Reservations", "Boxes", "System"],
  activeTab = "All",
  onChange = () => {},
}) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={`
              h-[28px]
              px-4
              rounded-[14px]
              text-[12px]
              font-medium
              transition-colors
              ${
                isActive
                  ? "bg-[#2CB7AA] text-white"
                  : "bg-[#EDEEEE] text-[#5A5B5B]"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
