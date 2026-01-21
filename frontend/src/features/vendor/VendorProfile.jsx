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

  /* ======================
     FETCH PROFILE
  ====================== */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getVendorProfile();
        setForm({
          businessName: data.businessName || "",
          phone: data.phone || "",
          email: data.email || "",
          bio: data.bio || "",
          location: data.location || "",
          avatarUrl: data.avatarUrl || "",
        });
      } catch (err) {
        console.error("Failed to load vendor profile", err);
      }
    };

    loadProfile();
  }, []);

  /* ======================
     HANDLERS
  ====================== */
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // UI preview only (no localStorage)
    const previewUrl = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      avatarUrl: previewUrl,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateVendorProfile({
        businessName: form.businessName,
        phone: form.phone,
        bio: form.bio,
        location: form.location,
        avatarUrl: form.avatarUrl,
      });

    } catch (err) {
      console.error("Failed to update vendor profile", err);
    } finally {
      setLoading(false);
    }
  };

  /* ======================
     UI
  ====================== */
  return (
    <div className="h-screen bg-neutral-100 overflow-hidden">
      <div className="mx-auto w-full max-w-[390px] h-full flex flex-col">
        {/* 🔹 Header */}
        <div className="px-6 pt-4">
          <h1 className="text-headlineSmall font-semibold text-neutral-900">
            Restaurant Profile
          </h1>
        </div>

        {/* 🔹 Content */}
        <div className="flex-1 px-6 pt-6 overflow-y-auto">
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
              onClick={() => fileRef.current?.click()}
              className="mt-4 rounded-full border border-teal-300 bg-teal-100 px-6 py-2 text-bodySmall font-medium text-teal-600 hover:bg-teal-200 transition"
            >
              Change Picture
            </button>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </div>

          {/* Inputs */}
          <div className="mt-8 space-y-4">
            {[
              ["Restaurant Name", "businessName", "Baraka Kitchen"],
              ["Phone Number", "phone", "70 123 456"],
              ["Email", "email", "email@example.com"],
              ["Bio", "bio", "Short description..."],
              ["Restaurant Location", "location", "Hamra, Beirut"],
            ].map(([label, key, placeholder]) => (
              <div key={key}>
                <label className="text-bodySmall font-medium text-neutral-700">
                  {label}
                </label>

                <input
                  value={form[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  disabled={key === "email"}
                  className="
                    mt-2 w-full rounded-xl border border-neutral-300
                    bg-white px-4 py-3 text-bodyMedium
                    text-neutral-900 placeholder-neutral-400
                    focus:border-teal-500 focus:outline-none
                    disabled:bg-neutral-100 disabled:text-neutral-500
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Save Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleSave}
            disabled={loading}
            className="
              w-full rounded-xl bg-teal-500 py-4
              text-bodyMedium font-semibold text-white
              hover:bg-teal-600 transition
              disabled:bg-neutral-300
            "
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
