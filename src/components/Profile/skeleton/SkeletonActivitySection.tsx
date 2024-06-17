const SkeletonActivityCard = () => (
  <div className="flex flex-col flex-1 grow justify-center items-center gap-[20px] rounded-xl lg:max-w-[300px] lg:h-[128px] md:max-w-full md:h-[119px] mobile:w-[105px] mobile:h-[119px] bg-slate-700 animate-pulse">
    <div className="w-[60%] h-[20px] lg:h-[24px] bg-slate-700 rounded" />
    <div className="flex items-center gap-[5px] h-[24px] lg:h-[24px]">
      <div className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] bg-slate-700 rounded-full" />
      <div className="w-[30%] h-[20px] lg:h-[24px] bg-slate-700 rounded" />
    </div>
  </div>
);

export const SkeletonActivitySection = () => (
  <section className="flex flex-col gap-[30px]">
    <div className="h-[30px] lg:h-[40px] bg-slate-700 rounded w-[200px]" />
    <div className="flex justify-between lg:gap-[20px] gap-[15px]">
      <SkeletonActivityCard />
      <SkeletonActivityCard />
      <SkeletonActivityCard />
    </div>
  </section>
);
