export const SkeletonRankingCard = () => {
  return (
    <div className="flex-none w-[200px] h-[65px] p-2 items-center gap-[10px] flex mb-7 bg-slate-700 rounded-lg animate-pulse">
      <div className="mobile:w-[36px] mobile:h-[36px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px] overflow-hidden w-12 h-12 rounded-full bg-gray-600" />
      <div className="flex flex-col items-start gap-1 lg:gap-2">
        <div className="flex items-center gap-[5px]">
          <div className="h-5 w-9 bg-gray-600 rounded-lg" />
          <div className="h-5 w-[80px] bg-gray-600 rounded-lg" />
        </div>
        <div className="flex gap-3 text-[12px] font-light text-gray-6E">
          <div className="h-4 w-[60px] bg-gray-600 rounded-md" />
          <div className="h-4 w-[60px] bg-gray-600 rounded-md" />
        </div>
      </div>
    </div>
  );
};
