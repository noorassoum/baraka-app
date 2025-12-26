import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { getVendorProfile, updateVendorProfile } from "./vendor.api";

export default function VendorProfile() {
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    businessName: "",
    phone: "",
    email: "",
    bio: "",
    location: "",
    avatarUrl: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getVendorProfile();
      setForm({
        businessName: data.businessName || "",
        phone: data.phone || "",
        email: data.email || "",
        bio: data.bio || "",
        location: data.location || "",
        avatarUrl: data.avatarUrl || "",
      });
    })();
  }, []);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setForm((prev) => ({
      ...prev,
      avatarUrl: URL.createObjectURL(file),
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    await updateVendorProfile(form);
    setLoading(false);
  };

  return (
    <div className="h-screen bg-neutral-100 overflow-hidden">
      <div className="mx-auto w-full max-w-[390px] h-full flex flex-col">
        {/* 🔹 Header */}
        <div className="px-6 pt-4">
          <h1 className="text-headlineSmall font-semibold text-neutral-900">
            Restaurant Profile
          </h1>
        </div>

        {/* 🔹 Main content (avatar + inputs) */}
        <div className="flex-1 px-6 pt-4">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full bg-neutral-300 flex items-center justify-center overflow-hidden">
              {form.avatarUrl ? (
                <img
                  src={form.avatarUrl}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <FiUser size={54} className="text-neutral-500" />
              )}
            </div>

            <button
              onClick={() => fileRef.current.click()}
              className="mt-4 rounded-full border border-teal-300 bg-teal-100 px-6 py-2 text-bodySmall font-medium text-teal-600"
            >
              Change Picture
            </button>

            <input
              ref={fileRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          {/* Inputs container */}
          <div className="mt-6 space-y-3">
            {[
              ["Restaurant Name", "businessName", "Baraka Developer"],
              ["Phone Number", "phone", "your phone number..."],
              ["Email", "email", "your email..."],
              ["Bio", "bio", "Bio, e.g..."],
              ["Restaurant Location", "location", "location..."],
            ].map(([label, key, placeholder]) => (
              <div key={key}>
                <div className="text-bodySmall font-medium text-neutral-700">
                  {label}
                </div>
                <input
                  value={form[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-bodyMedium text-neutral-900 placeholder-neutral-400 focus:border-teal-500 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Save button container (separate + bottom margin) */}
        <div className="px-6 py-6">
          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full rounded-xl bg-teal-500 py-4 text-bodyMedium font-semibold text-white disabled:bg-neutral-300"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
