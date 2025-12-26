export default function BoxTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-10 border-b border-neutral-200 mt-6">
      {/* Description */}
      <button
        onClick={() => setActiveTab("description")}
        className={`relative pb-3 text-sm font-semibold transition-colors ${
          activeTab === "description"
            ? "text-neutral-900"
            : "text-neutral-400"
        }`}
      >
        Description
        {activeTab === "description" && (
          <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-orange-500 rounded-full" />
        )}
      </button>

      {/* Review */}
      <button
        onClick={() => setActiveTab("review")}
        className={`relative pb-3 text-sm font-semibold transition-colors ${
          activeTab === "review"
            ? "text-neutral-900"
            : "text-neutral-400"
        }`}
      >
        Review
        {activeTab === "review" && (
          <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-orange-500 rounded-full" />
        )}
      </button>
    </div>
  );
}
