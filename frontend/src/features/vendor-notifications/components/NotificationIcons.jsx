import {
  Check,
  Package,
  Clock,
  Info,
} from "lucide-react";

const ICON_CONFIG = {
  reservation: {
    Icon: Check,
    bg: "bg-[#D4F4F0]",
    color: "text-[#2CB7AA]",
  },
  sold_out: {
    Icon: Package,
    bg: "bg-[#FFE4D7]",
    color: "text-[#FF6B35]",
  },
  pickup_completed: {
    Icon: Clock,
    bg: "bg-[#D4F4F0]",
    color: "text-[#2CB7AA]",
  },
  system: {
    Icon: Info,
    bg: "bg-[#EDEEEE]",
    color: "text-[#5A5B5B]",
  },
};

export default function NotificationIcon({ type }) {
  const config = ICON_CONFIG[type];

  if (!config) return null;

  const { Icon, bg, color } = config;

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${bg}`}
    >
      <Icon className={`w-4 h-4 ${color}`} />
    </div>
  );
}
