import { useState } from "react";

const CATEGORIES = ["Meals", "Snacks", "Pastries", "Bakery", "Drinks"];

export default function Categories({ onChange }) {
    const [active, setActive] = useState("Meals");

    const handleSelect = (category) => {
        setActive(category);
        onChange?.(category);
    };

    return (
        <div className="categories-wrapper">
            <div className="categories-scroll flex gap-3">
                {CATEGORIES.map((cat) => {
                    const isActive = active === cat;

                    return (
                        <button
                            key={cat}
                            onClick={() => handleSelect(cat)}
                            className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                transition-all
                ${isActive
                                    ? "bg-teal-500 text-white border border-teal-500"
                                    : "bg-white text-neutral-800 border border-neutral-300"
                                }
              `}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
