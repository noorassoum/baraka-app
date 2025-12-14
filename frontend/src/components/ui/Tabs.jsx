const Tabs = ({ tabs = [], value, onChange }) => {
  return (
    <div className="flex justify-between border-b border-gray-200 w-full px-60  ">
      {tabs.map((tab) => {
        const isActive = tab.value === value;

        return (
          <button
           key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`
      relative
      px-4
      py-3
      text-2xl
     font-semibold
      text-gray-900
    
              ${
                isActive
                  ? "text-teal-400 hover:text-teal-600 "
                  : "text-neutral-700 border-transparent hover:border-teal-500"
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
