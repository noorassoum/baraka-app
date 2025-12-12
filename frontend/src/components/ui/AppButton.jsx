export default function AppButton({
  text,
  onClick,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
}) {
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";
  const isDisabled = disabled || loading;

  let baseStyles =
    "w-full rounded-full font-semibold text-center transition-all duration-200 py-3";

  let primaryStyles =
    "bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700";

  let outlineStyles =
    "border-2 border-teal-500 text-teal-500 hover:bg-teal-50 active:bg-teal-100";

  let disabledStyles =
    "bg-neutral-300 text-neutral-500 cursor-not-allowed border-none";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${baseStyles}
        ${isDisabled ? disabledStyles : ""}
        ${!isDisabled && isPrimary ? primaryStyles : ""}
        ${!isDisabled && isOutline ? outlineStyles : ""}
        ${className}
      `}
    >
      {loading ? "..." : text}
    </button>
  );
}
