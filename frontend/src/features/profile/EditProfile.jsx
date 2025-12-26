import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { getMyProfile, updateMyProfile } from "./profile.api";

export default function EditProfile() {
  const fileRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getMyProfile();
        setAvatarUrl(data?.avatarUrl || "");
        setName(data?.name || "");
        setPhoneNumber(data?.phoneNumber || "");
        setBio(data?.bio || "");
      } catch {
        // keep defaults
      }
    })();
  }, []);

  const onPickImage = () => fileRef.current?.click();

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setAvatarUrl(preview); // preview only (still saved as string)
  };

  const onSave = async () => {
    try {
      setLoading(true);
      await updateMyProfile({ name, phoneNumber, bio, avatarUrl });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto w-full max-w-[390px] px-6 pt-10">
        {/* Title */}
        <div className="text-headlineLarge font-semibold text-neutral-900">
          Profile
        </div>

        {/* Avatar */}
        <div className="mt-10 flex flex-col items-center">
          <div className="h-28 w-28 rounded-full bg-neutral-300 flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <FiUser className="text-neutral-500" size={54} />
            )}
          </div>

          {/* Change Picture */}
          <button
            onClick={onPickImage}
            className="mt-5 rounded-full border border-teal-300 bg-teal-100 px-6 py-2 text-bodySmall font-medium text-teal-600"
          >
            Change Picture
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFileChange}
          />
        </div>

        {/* Form */}
        <div className="mt-10">
          {/* Name */}
          <div className="text-bodySmall font-medium text-neutral-700">Name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-bodyMedium font-normal text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-teal-500"
            placeholder="Baraka Developer"
          />

          {/* Phone Number */}
          <div className="mt-6 text-bodySmall font-medium text-neutral-700">
            Phone Number
          </div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-bodyMedium font-normal text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-teal-500"
            placeholder="your phone number..."
          />

          {/* Bio */}
          <div className="mt-6 text-bodySmall font-medium text-neutral-700">Bio</div>
          <input
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-bodyMedium font-normal text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-teal-500"
            placeholder="Bio, e.g..."
          />

          {/* Save */}
          <button
            onClick={onSave}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-teal-500 py-4 text-bodyMedium font-semibold text-white shadow-sm disabled:bg-neutral-300 disabled:text-neutral-500"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
