import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import UploadPhotos from "../../components/add-box/UploadPhotos";
import BoxInformation from "../../components/add-box/BoxInformation";
import PricingSection from "../../components/add-box/PricingSection";
import PickupDetails from "../../components/add-box/PickupDetails";
import AddBoxActions from "../../components/add-box/AddBoxActions";

import { createBox } from "../../boxes.api";

export default function AddBox() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    quantity: 1,
    fromTime: "",
    toTime: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        title: form.title,
        description: form.description,
        originalPrice: Number(form.originalPrice),
        discountedPrice: Number(form.discountedPrice),
        quantity: Number(form.quantity),
        pickupTime: `${form.fromTime} - ${form.toTime}`,
      };

      await createBox(payload);

      navigate("/vendor/boxes");
    } catch (err) {
      alert("Failed to create box");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-5 pt-4 pb-8">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <ChevronLeft
          className="w-5 h-5 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-semibold">Add box</h1>
      </div>

      {/* IMAGE (UI ONLY) */}
      <UploadPhotos />

      {/* FORM SECTIONS */}
      <BoxInformation form={form} onChange={handleChange} />
      <PricingSection form={form} onChange={handleChange} />
      <PickupDetails form={form} onChange={handleChange} />

      <AddBoxActions
        loading={loading}
        onSave={handleSubmit}
        onCancel={() => navigate(-1)}
      />
    </div>
  );
}
