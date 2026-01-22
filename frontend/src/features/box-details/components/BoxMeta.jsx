export default function BoxMeta({ quantity, category }) {
  return (
    <div className="flex gap-3">
      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
        {quantity} left
      </span>

      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
        {category}
      </span>
    </div>
  );
}
