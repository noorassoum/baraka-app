import { useNavigate } from "react-router-dom";

export default function AddBoxActions() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 space-y-3">
      {/* Save */}
      <button
        type="button"
        onClick={() => navigate("/vendor/boxes")}
        className="
          w-full
          h-[44px]
          rounded-[12px]
          bg-[#2CB7AA]
          text-white
          text-sm
          font-medium
        "
      >
        Save
      </button>

      {/* Cancel */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="
          w-full
          h-[44px]
          rounded-[12px]
          border border-[#2CB7AA]
          text-[#2CB7AA]
          text-sm
          font-medium
          bg-white
        "
      >
        Cancel
      </button>
    </div>
  );
}
