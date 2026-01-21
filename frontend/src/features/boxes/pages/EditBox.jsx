import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateBox, getMyBoxes } from "../boxes.api";

export default function EditBox() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    quantity: "",
    pickupTime: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const boxes = await getMyBoxes();
      const box = boxes.find((b) => b._id === id);

      if (!box) return navigate("/vendor/boxes");

      setForm({
        title: box.title,
        description: box.description,
        originalPrice: box.originalPrice,
        discountedPrice: box.discountedPrice,
        quantity: box.quantity,
        pickupTime: box.pickupTime,
        image: box.image || "",
      });

      setLoading(false);
    })();
  }, [id]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    await updateBox(id, form);
    navigate("/vendor/boxes");
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-white px-5 pt-4">
      <h1 className="text-lg font-semibold mb-6">Edit Box</h1>

      {[
        ["Title", "title"],
        ["Description", "description"],
        ["Original Price", "originalPrice"],
        ["Discounted Price", "discountedPrice"],
        ["Quantity", "quantity"],
        ["Pickup Time", "pickupTime"],
      ].map(([label, key]) => (
        <div key={key} className="mb-4">
          <label className="text-sm font-medium">{label}</label>
          <input
            value={form[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            className="mt-1 w-full border rounded-xl px-4 py-2"
          />
        </div>
      ))}

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-[#2CB7AA] text-white py-3 rounded-xl"
      >
        Save Changes
      </button>
    </div>
  );
}
