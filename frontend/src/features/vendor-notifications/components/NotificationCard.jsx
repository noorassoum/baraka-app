import NotificationIcon from "./NotificationIcons";

export default function NotificationCard({
  title,
  description,
  timeAgo,
  type,
}) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] p-3 flex gap-3">
      <NotificationIcon type={type} />

      <div className="flex-1">
        <p className="text-[12px] font-medium text-[#1A1A1A]">
          {title}
        </p>

        <p className="mt-[2px] text-[10px] text-[#5A5B5B]">
          {description}
        </p>

        <p className="mt-1 text-[10px] text-[#9B9B9B]">
          {timeAgo}
        </p>
      </div>
    </div>
  );
}
