import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-4 mt-2">
      <div className="flex items-center gap-2 bg-white border border-neutral-300 rounded-xl px-3 py-2">
        <Search size={18} className="text-neutral-500" />
        <input
          type="text"
          placeholder="Search for meals or categories"
          className="flex-1 text-sm outline-none"
        />
      </div>
    </div>
  );
}
