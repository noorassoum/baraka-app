import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import VendorBoxImageCarousel from "./components/VendorBoxImageCarousel";
import VendorBoxMeta from "./components/VendorBoxMeta";
import VendorBoxDescription from "./components/VendorBoxDescription";
import VendorPickupWindow from "./components/VendorPickupWindow";
import VendorBoxActions from "./components/VendorBoxActions";

import { getBoxById, deleteBox } from "../boxes/boxes.api";

// fallback image (until real upload)
import pastabox from "../../assets/pastabox.png";

export default function VendorBoxDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [box, setBox] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getBoxById(id);
        setBox(data);
      } catch (error) {
        alert("Failed to load box");
        navigate("/vendor/boxes");
      } finally {
        setLoading(false);
      }
    })();
  }, [id, navigate]);

  const handleEdit = () => {
    navigate(`/vendor/edit-box/${id}`);
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Delete this box?");
    if (!confirm) return;

    await deleteBox(id);
    navigate("/vendor/boxes");
  };

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (!box) return null;

  return (
    <div className="min-h-screen bg-neutral-100 pb-32">
      {/* Image */}
      <VendorBoxImageCarousel
        images={[box.image || pastabox]}
        onBack={() => navigate(-1)}
      />

      {/* Content */}
      <div className="px-5 pt-6 space-y-6">
        <VendorBoxMeta
          title={box.title}
          quantity={box.quantity}
          available={box.available}
        />

        <VendorBoxDescription description={box.description} />

        <VendorPickupWindow pickupTime={box.pickupTime} />
      </div>

      {/* Actions */}
      <VendorBoxActions
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
