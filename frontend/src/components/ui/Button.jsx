export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary", // "primary" | "outline"
  fullWidth = false,
  loading = false,
  disabled = false,
  className = "",
}) {
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";
  const isDisabled = disabled || loading;

  const baseStyles =
    "rounded-full font-semibold text-center transition-all duration-200 py-3 text-labelLarge";

  const widthStyles = fullWidth ? "w-full" : "inline-flex";

  const primaryStyles =
    "bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700";

  const outlineStyles =
    "border-2 border-teal-500 text-teal-500 hover:bg-teal-50 active:bg-teal-100";

  const disabledStyles =
    "bg-neutral-300 text-neutral-500 cursor-not-allowed border-none";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={[
        baseStyles,
        widthStyles,
        "items-center justify-center",
        isDisabled ? disabledStyles : "",
        !isDisabled && isPrimary ? primaryStyles : "",
        !isDisabled && isOutline ? outlineStyles : "",
        className,
      ].join(" ")}
    >
      {loading ? "..." : children}
    </button>
  );
}
