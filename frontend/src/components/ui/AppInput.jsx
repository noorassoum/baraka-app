import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Phone,
  User,
  MapPin,
} from "lucide-react";

export default function AppInput({
  value,
  onChange,
  placeholder = "",
  icon = null,
  isPassword = false,
  disabled = false,
  error = false,
  errorMessage = "",
  multiline = false,
  type = "text",
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  // icon library mapping
  const iconMap = {
    email: Mail,
    password: Lock,
    phone: Phone,
    user: User,
    location: MapPin,
  };

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className="w-full relative">
      {/* Left Icon */}
      {IconComponent && (
        <IconComponent
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600"
        />
      )}

      {/* Password eye toggle */}
      {isPassword && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      )}

      {/* Input Field */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        className={`
          w-full
          rounded-full
          border
          ${error ? "border-error-500" : "border-neutral-300"}
          ${disabled ? "bg-neutral-200 cursor-not-allowed" : "bg-white"}
          ${IconComponent ? "pl-12" : "pl-4"}
          ${isPassword ? "pr-12" : "pr-4"}
          py-3
          text-neutral-800
          placeholder-neutral-500
          focus:outline-none
          focus:border-teal-500
          transition-all
          ${className}
        `}
        {...(multiline ? { as: "textarea", rows: 4 } : {})}
      />

      {/* Error message */}
      {error && (
        <p className="text-error-500 text-sm mt-1 ml-2">{errorMessage}</p>
      )}
    </div>
  );
}
