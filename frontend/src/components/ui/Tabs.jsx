const Tabs = ({ tabs = [], value, onChange }) => {
  return (
    <div className="flex w-full border-b border-neutral-200">
      {tabs.map((tab) => {
        const isActive = tab.value === value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`
              flex-1
              py-3
              text-center
              text-sm
              font-semibold
              transition-colors
              ${
                isActive
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-neutral-400"
              }

              sm:text-base
              lg:text-2xl
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
