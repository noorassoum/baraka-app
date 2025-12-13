const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-neutral-100 rounded-xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;