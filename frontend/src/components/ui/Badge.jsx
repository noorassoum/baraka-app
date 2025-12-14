const VARIANT_STYLES = {
  neutral: "bg-neutral-200 text-neutral-800",
  success: "bg-success-100 text-success-700",
  teal: "bg-teal-100 text-teal-700",
  error: "bg-error-100 text-error-700",
};

const Badge = ({ children, variant = "neutral" }) => {
  const styles = VARIANT_STYLES[variant] || VARIANT_STYLES.neutral;

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-labelMedium font-medium ${styles}`}
    >
      {children}
    </span>
  );
};

export default Badge;
