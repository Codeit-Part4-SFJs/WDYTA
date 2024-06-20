export const SkeletonProfileCard = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[42px] pt-[40px] pb-[30px] px-[30px] md:gap-[25px] mobile:gap-[35px] lg:min-w-[340px] md:w-full mobile:w-full rounded-xl border border-solid bg-gray-25 border-gray-35 animate-pulse">
      <div className="lg:w-[180px] lg:h-[180px] md:w-[120px] md:h-[120px] mobile:w-[120px] mobile:h-[120px] rounded-full bg-slate-700" />
      <div className="flex flex-col items-center lg:gap-[20px] md:gap-[10px] mobile:gap-[10px] lg:w-[300px] lg:min-h-[66px] md:w-full mobile:w-full text-center">
        <div className="lg:w-[140px] lg:h-[24px] md:w-[100px] md:h-[20px] mobile:w-[100px] mobile:h-[20px] rounded-lg bg-slate-700" />
        <div className="lg:w-[300px] lg:h-[14px] md:w-full md:h-[14px] mobile:w-full mobile:h-[14px] rounded-lg bg-slate-700" />
      </div>
      <div className="flex justify-between lg:w-[184px] lg:h-[53px] md:w-[234px] md:h-[48px] mobile:w-[194px] mobile:h-[48px]">
        <div className="flex flex-col items-center">
          <div className="lg:w-[40px] lg:h-[20px] md:w-[30px] md:h-[18px] mobile:w-[30px] mobile:h-[18px] rounded-lg bg-slate-700" />
          <div className="lg:w-[60px] lg:h-[16px] md:w-[50px] md:h-[14px] mobile:w-[50px] mobile:h-[14px] rounded-lg bg-slate-700" />
        </div>
        <div className="border border-solid border-gray-35" />
        <div className="flex flex-col items-center">
          <div className="lg:w-[40px] lg:h-[20px] md:w-[30px] md:h-[18px] mobile:w-[30px] mobile:h-[18px] rounded-lg bg-slate-700" />
          <div className="lg:w-[60px] lg:h-[16px] md:w-[50px] md:h-[14px] mobile:w-[50px] mobile:h-[14px] rounded-lg bg-slate-700" />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mobile:w-full md:w-full">
        <div className="lg:w-[295px] lg:h-[65px] md:w-[300px] md:h-[55px] mobile:w-full mobile:h-[50px] rounded-lg bg-slate-700" />
        <div className="lg:w-[295px] lg:h-[65px] md:w-[300px] md:h-[55px] mobile:w-full mobile:h-[50px] rounded-lg bg-slate-700" />
      </div>
    </section>
  );
};
