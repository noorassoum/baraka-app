import { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";

/**
 * Simple country code detection (frontend-only)
 * You can extend this list later if needed.
 */
const COUNTRY_CODES = {
  LB: { code: "+961", label: "🇱🇧 +961" },
  FR: { code: "+33", label: "🇫🇷 +33" },
  US: { code: "+1", label: "🇺🇸 +1" },
  CA: { code: "+1", label: "🇨🇦 +1" },
  DE: { code: "+49", label: "🇩🇪 +49" },
};

export default function VendorProfile() {
  const fileInputRef = useRef(null);

  const [avatar, setAvatar] = useState("");
  const [restaurantName, setRestaurantName] = useState("Baraka Developer");
  const [countryCode, setCountryCode] = useState("+961");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  /* Auto-detect country code on first load */
  useEffect(() => {
    const lang = navigator.language || "en-US"; // e.g. en-LB
    const country = lang.split("-")[1];

    if (country && COUNTRY_CODES[country]) {
      setCountryCode(COUNTRY_CODES[country].code);
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatar(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-xl font-semibold text-neutral-900">
          Restaurant Profile
        </h1>

        {/* Avatar */}
        <div className="mt-8 flex flex-col items-center">
          <div className="h-28 w-28 rounded-full bg-neutral-300 flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img
                src={avatar}
                alt="avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <FiUser size={52} className="text-neutral-500" />
            )}
          </div>

          <button
            onClick={handleImageClick}
            className="mt-4 rounded-full border border-teal-400 bg-teal-100 px-6 py-2 text-sm font-medium text-teal-600 hover:bg-teal-200 transition"
          >
            Change Picture
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Form */}
        <div className="mt-10 space-y-6">
          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Restaurant Name
            </label>
            <input
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Phone Number
            </label>

            <div className="mt-2 flex gap-2">
              {/* Country Code */}
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="rounded-xl border border-neutral-300 bg-white px-3 py-3 text-sm focus:outline-none focus:border-teal-500"
              >
                {Object.values(COUNTRY_CODES).map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>

              {/* Phone Input */}
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
                placeholder="03 123 456"
                className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 text-sm placeholder-neutral-400 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email..."
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm placeholder-neutral-400 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Bio
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio, e.g..."
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm placeholder-neutral-400 focus:outline-none focus:border-teal-500 resize-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Restaurant Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-teal-500"
            >
              <option value="">Select location...</option>
              <option value="Beirut">Beirut</option>
              <option value="Tripoli">Tripoli</option>
              <option value="Saida">Saida</option>
              <option value="Zahle">Zahle</option>
              <option value="Jounieh">Jounieh</option>
            </select>
          </div>
        </div>

        {/* Save */}
        <div className="mt-10">
          <button className="w-full sm:w-auto rounded-xl bg-teal-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
