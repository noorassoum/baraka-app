import { ImagePlus } from "lucide-react";

export default function UploadPhotos() {
  return (
    <div
      className="
        w-full
        h-[130px]
        rounded-[14px]
        border-2 border-dashed border-[#DCDDDD]
        flex flex-col items-center justify-center
        gap-2
      "
    >
      <ImagePlus className="w-6 h-6 text-[#5A5B5B]" />

      <p className="text-sm font-medium text-[#1A1A1A]">
        Upload meal photos
      </p>

    </div>
  );
}
