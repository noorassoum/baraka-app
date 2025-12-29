export default function EmptyState({ status }) {
  const messages = {
    Active: "You have no active boxes",
    Reserved: "No reserved boxes yet",
    Completed: "No completed boxes yet",
  };

  return (
    <div className="mt-20 flex flex-col items-center text-center px-6">
      <p className="text-[12px] font-medium text-[#1A1A1A]">
        {messages[status]}
      </p>
      <p className="mt-1 text-[10px] text-[#5A5B5B]">
        Boxes you create will appear here
      </p>
    </div>
  );
}
