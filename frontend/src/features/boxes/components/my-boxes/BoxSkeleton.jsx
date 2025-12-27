export default function BoxSkeleton() {
  return (
    <div className="bg-white rounded-[16px] shadow p-3 animate-pulse">
      <div className="h-[120px] bg-[#EDEEEE] rounded-[12px]" />
      <div className="mt-3 h-3 bg-[#EDEEEE] rounded w-3/4" />
      <div className="mt-2 h-2 bg-[#EDEEEE] rounded w-1/2" />
    </div>
  );
}
