import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UploadPhotos from "../../components/add-box/UploadPhotos";
import BoxInformation from "../../components/add-box/BoxInformation";
import PricingSection from "../../components/add-box/PricingSection";
import PickupDetails from "../../components/add-box/PickupDetails";
import AddBoxActions from "../../components/add-box/AddBoxActions";


export default function AddBox() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-5 pt-4 pb-8">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <ChevronLeft
          className="w-5 h-5 text-[#1A1A1A] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-semibold text-[#1A1A1A]">
          Add box
        </h1>
      </div>

      {/* UPLOAD PHOTO PLACEHOLDER */}
      <div className="mb-6">
        <UploadPhotos/>
      </div>

      {/* BOX INFORMATION TITLE */}
      <div className="mt-8">
        <BoxInformation />
      </div>

      <div className="mt-8">
        <PricingSection />
      </div>

      <div className="mt-8">
        <PickupDetails />
      </div>

      <AddBoxActions />
    </div>
  );
}
