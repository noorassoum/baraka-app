import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  icon,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <div className={`flex items-center gap-3 border rounded-xl px-4 py-3 bg-white
        ${error ? "border-error-400" : "border-neutral-300"}`}>
        
        {icon && <span className="text-neutral-600">{icon}</span>}

        <input
          type={type === "password" ? (show ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full text-neutral-800 outline-none"
        />

        {type === "password" && (
          <button type="button" onClick={() => setShow(!show)}>
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-error-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  );
}
