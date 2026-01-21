import { ImagePlus } from "lucide-react";

export default function UploadPhotos() {
  return (
    <div className="w-full h-[130px] rounded-xl border-2 border-dashed flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <ImagePlus />
        <p className="text-sm">Upload meal photos</p>
      </div>
    </div>
  );
}
