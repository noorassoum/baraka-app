export default function StatusTabs({
  statuses = ["Active", "Reserved", "Completed"],
  activeStatus = "Active",
  onChange = () => {},
}) {
  return (
    <div className="flex gap-2">
      {statuses.map((status) => {
        const isActive = activeStatus === status;

        return (
          <button
            key={status}
            type="button"
            onClick={() => onChange(status)}
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
            {status}
          </button>
        );
      })}
    </div>
  );
}
