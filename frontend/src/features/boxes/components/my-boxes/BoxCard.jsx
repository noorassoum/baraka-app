import { useState } from "react";
import {
  MoreVertical,
  Clock,
  Edit,
  Trash2,
  Bookmark,
} from "lucide-react";

export default function BoxCard({
  id,
  title,
  pickupInfo,
  status,
  imageUrl,
  available,
  reservedCount,
  canEdit = true,
  onClick,
  onMarkReserved,
  onEdit,
  onDelete,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const canMarkReserved =
    status === "Active" && reservedCount === 0;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-[16px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-[120px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Menu */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
        >
          <MoreVertical className="w-4 h-4" />
        </button>

        {menuOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-10 right-2 w-[190px] bg-white rounded-[12px] shadow-md text-[12px] z-10 overflow-hidden"
          >
            {/* Mark as Reserved */}
            {canEdit && (
              <button
                disabled={!canMarkReserved}
                onClick={() => {
                  setMenuOpen(false);
                  onMarkReserved(id);
                }}
                className={`flex items-center gap-2 w-full px-4 py-2 text-left
                  ${
                    canMarkReserved
                      ? "hover:bg-[#F7F8F7]"
                      : "opacity-40 cursor-not-allowed"
                  }`}
              >
                <Bookmark className="w-4 h-4 text-[#2CB7AA]" />
                Mark as Reserved
              </button>
            )}

            {/* Edit */}
            {canEdit && (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onEdit(id);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[#F7F8F7]"
              >
                <Edit className="w-4 h-4" />
                Edit Box Details
              </button>
            )}

            {/* Delete */}
            {canEdit && (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onDelete(id);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-[#E53935] hover:bg-[#FDECEA]"
              >
                <Trash2 className="w-4 h-4 text-[#E53935]" />
                Delete Box
              </button>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-3 pt-2 pb-3">
        <p className="text-[12px] font-medium">{title}</p>

        <div className="mt-[2px] flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#2CB7AA]" />
          <p className="text-[10px] text-[#5A5B5B]">
            {pickupInfo}
          </p>
        </div>

        {status === "Active" && (
          <div className="mt-2 flex justify-between">
            {available ? (
              <span className="px-2 py-[2px] rounded-[10px] text-[10px] bg-[#D4F4F0] text-[#2CB7AA]">
                Available
              </span>
            ) : (
              <span />
            )}

            {reservedCount > 0 && (
              <span className="px-2 py-[2px] rounded-[10px] text-[10px] bg-[#FFE4D7] text-[#FF6B35]">
                {reservedCount} reserved
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
