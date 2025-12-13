const Tabs = ({ tabs = [], value, onChange }) => {
  return (
    <div className="inline-flex rounded-xl bg-neutral-200 p-1">
      {tabs.map((tab) => {
        const isActive = tab.value === value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`px-4 py-2 rounded-lg text-labelLarge font-medium transition-colors
              ${
                isActive
                  ? "bg-teal-500 text-white"
                  : "text-neutral-700 hover:bg-neutral-300"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
