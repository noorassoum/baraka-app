import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Menu, Plus } from "lucide-react";

import StatusTabs from "../../components/my-boxes/StatusTabs";
import BoxCard from "../../components/my-boxes/BoxCard";
import EmptyState from "../../components/my-boxes/EmptyState";
import ConfirmDeleteModal from "../../components/my-boxes/ConfirmDeleteModal";

import { getMyBoxes, deleteBox } from "../../boxes.api";


import PastaBox from "../../../../assets/pastabox.png";

const STATUSES = ["Active", "Reserved", "Completed"];

export default function MyBoxes() {
  const navigate = useNavigate();

  const [activeStatus, setActiveStatus] = useState("Active");
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  // 🔹 Fetch vendor boxes
  useEffect(() => {
    (async () => {
      try {
        const data = await getMyBoxes();
        setBoxes(data);
      } catch (error) {
        console.error("Failed to load boxes", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 🔹 Map backend state → UI status
  const mapStatus = (box) => {
    if (!box.available) return "Completed";
    if (box.quantity === 0) return "Reserved";
    return "Active";
  };

  const filteredBoxes = boxes.filter(
    (box) => mapStatus(box) === activeStatus
  );

  return (
    <>
      <div className="min-h-screen bg-[#F7F8F7] px-5">
        {/* Header */}
        <header className="flex justify-between py-4">
          <div className="flex gap-2">
            <ArrowLeft onClick={() => navigate(-1)} />
            <h1 className="text-sm font-medium">My Boxes</h1>
          </div>
          <div className="flex gap-3">
            <Bell />
            <Menu />
          </div>
        </header>

        <StatusTabs
          statuses={STATUSES}
          activeStatus={activeStatus}
          onChange={setActiveStatus}
        />

        <div className="mt-6 grid grid-cols-2 gap-4">
          {loading ? (
            <p className="text-sm text-neutral-500 col-span-2 text-center">
              Loading boxes…
            </p>
          ) : filteredBoxes.length === 0 ? (
            <EmptyState status={activeStatus} />
          ) : (
            filteredBoxes.map((box) => (
              <BoxCard
                key={box._id}
                id={box._id}
                title={box.title}
                pickupInfo={box.pickupTime}
                status={box.available ? "Active" : "Completed"}
                imageUrl={box.image || PastaBox}
                available={box.available}
                quantity={box.quantity}
                onClick={() => navigate(`/vendor/boxes/${box._id}`)}
                onEdit={(id) => navigate(`/vendor/edit-box/${id}`)}
                onDelete={() => setDeleteId(box._id)}
              />
            ))

          )}
        </div>

        <div className="h-20" />

        {/* Floating Add */}
        <button
          onClick={() => navigate("/vendor/add-box")}
          className="fixed bottom-6 right-6 w-[56px] h-[56px] rounded-full bg-[#2CB7AA] flex items-center justify-center shadow-[0px_4px_12px_#00000026]"
        >
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        open={Boolean(deleteId)}
        onCancel={() => setDeleteId(null)}
        onConfirm={async () => {
          await deleteBox(deleteId);

          setBoxes((prev) =>
            prev.filter((b) => b._id !== deleteId)
          );

          setDeleteId(null);
        }}
      />

    </>
  );
}
