import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Menu, Plus } from "lucide-react";

import StatusTabs from "../../components/my-boxes/StatusTabs";
import BoxCard from "../../components/my-boxes/BoxCard";
import EmptyState from "../../components/my-boxes/EmptyState";
import ConfirmDeleteModal from "../../components/my-boxes/ConfirmDeleteModal";

import PastaBox from "../../../../assets/pastabox.png";

const STATUSES = ["Active", "Reserved", "Completed"];

export default function MyBoxes() {
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState("Active");
  const [deleteId, setDeleteId] = useState(null);

  const [boxes, setBoxes] = useState([
    {
      id: 1,
      title: "Chicken Pasta Box",
      pickupInfo: "Today • 5:00 PM - 7:00 PM",
      status: "Active",
      available: true,
      reservedCount: 0,
    },
    {
      id: 2,
      title: "Vegan Salad Box",
      pickupInfo: "Today • 1:00 PM - 3:00 PM",
      status: "Active",
      available: true,
      reservedCount: 3,
    },
    {
      id: 3,
      title: "Beef Bowl Box",
      pickupInfo: "Yesterday • 6:00 PM - 8:00 PM",
      status: "Reserved",
    },
    {
      id: 4,
      title: "Dessert Box",
      pickupInfo: "Last week • 4:00 PM - 6:00 PM",
      status: "Completed",
      canEdit: false,
    },
  ]);

  const filteredBoxes = boxes.filter(
    (b) => b.status === activeStatus
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
          {filteredBoxes.length === 0 ? (
            <EmptyState status={activeStatus} />
          ) : (
            filteredBoxes.map((box) => (
              <BoxCard
                key={box.id}
                {...box}
                imageUrl={PastaBox}
                onClick={() =>
                  navigate(`/vendor/boxes/${box.id}`)
                }
                onMarkReserved={(id) =>
                  setBoxes((prev) =>
                    prev.map((b) =>
                      b.id === id
                        ? {
                            ...b,
                            reservedCount: 1,
                          }
                        : b
                    )
                  )
                }
                onEdit={(id) =>
                  navigate(`/vendor/edit-box/${id}`)
                }
                onDelete={(id) => setDeleteId(id)}
              />
            ))
          )}
        </div>

        <div className="h-20" />

        {/* Floating Add */}
        <button
          onClick={() => navigate("/vendor/add-box")}
          className="fixed bottom-6 right-6 w-[56px] h-[56px] rounded-full bg-[#2CB7AA] text-white"
        >
          <Plus />
        </button>
      </div>

      {/* Confirm Delete */}
      <ConfirmDeleteModal
        open={Boolean(deleteId)}
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setBoxes((prev) =>
            prev.filter((b) => b.id !== deleteId)
          );
          setDeleteId(null);
        }}
      />
    </>
  );
}
