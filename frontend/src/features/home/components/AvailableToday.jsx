import BoxCard from "./BoxCard";

import pastaBox from "../../../assets/pastabox.png";
import chickenBox from "../../../assets/chickenbox.png";
import mustardBox from "../../../assets/mustardbox.png";

const boxes = [
  {
    id: 1,
    image: pastaBox,
    title: "Chicken Pasta Box",
    restaurant: "Bella Ciao Restaurant",
    description:
      "Creamy chicken pasta with grilled chicken slices and parmesan.",
    pickup: "5:00 PM – 7:00 PM",
    price: "$4.50",
    status: "available",
    left: "3 Left",
  },
  {
    id: 2,
    image: chickenBox,
    title: "Grilled Chicken & Veggie",
    restaurant: "Green Leaf Kitchen",
    description:
      "Grilled chicken breast with vegetables and roasted potatoes.",
    pickup: "5:00 PM – 7:00 PM",
    price: "$5.00",
    status: "sold",
  },
  {
    id: 3,
    image: mustardBox,
    title: "Honey Mustard Chicken",
    restaurant: "Golden Spoon Kitchen",
    description:
      "Roasted chicken with honey mustard sauce and fresh vegetables.",
    pickup: "4:00 PM – 6:00 PM",
    price: "$5.50",
    status: "available",
    left: "2 Left",
  },
];

export default function AvailableToday() {
  return (
    <section className="px-4 py-6">
      <h2 className="font-semibold text-neutral-900 mb-4">
        Available Today
      </h2>

      <div className="flex flex-col gap-6">
        {boxes.map((box) => (
          <BoxCard key={box.id} {...box} />
        ))}
      </div>
    </section>
  );
}
