import { Bell } from "lucide-react";

export default function EmptyNotifications() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-[#EDEEEE] flex items-center justify-center">
        <Bell className="w-8 h-8 text-[#9B9B9B]" />
      </div>

      <p className="mt-4 text-[14px] font-medium text-[#1A1A1A]">
        No Notifications Yet
      </p>

      <p className="mt-1 text-[11px] text-[#5A5B5B]">
        We’ll notify you when customers reserve or pick up their boxes
      </p>
    </div>
  );
}
