export const SkeletonProductDetail = () => {
  return (
    <div className="mobile:mt-[30px] md:mt-[44px] lg:mt-[64px] lg:mb-[20px]">
      <div className="flex mobile:flex-col items-center lg:justify-stretch md:justify-stretch md:items-start lg:items-start gap-[20px] lg:gap-[40px] animate-pulse">
        <div className="mobile:w-full mobile:h-[236px] md:w-[280px] md:h-[197px] lg:w-[355px] lg:h-[250px] rounded-lg bg-slate-700" />
        <div className="flex flex-col gap-[15px] w-full">
          <div className="mobile:w-[140px] mobile:h-[30px] md:w-[160px] md:h-[30px] lg:w-[190px] lg:h-[36px] rounded-lg bg-slate-700" />
          <div className="mobile:w-full mobile:h-[12px] md:w-full md:h-[12px] lg:w-full lg:h-[18px] rounded-lg bg-slate-700" />
          <div className="mobile:w-full mobile:h-[12px] md:w-full md:h-[12px] lg:w-full lg:h-[18px] rounded-lg bg-slate-700" />
          <div className="mobile:w-full mobile:h-[12px] md:w-full md:h-[12px] lg:w-full lg:h-[18px] rounded-lg bg-slate-700" />
          <div className="mobile:w-full mobile:h-[12px] md:w-full md:h-[12px] lg:w-full lg:h-[18px] rounded-lg bg-slate-700" />
          <div className="mobile:w-full mobile:h-[12px] md:w-full md:h-[12px] lg:w-full lg:h-[18px] rounded-lg bg-slate-700" />
        </div>
      </div>
    </div>
  );
};
