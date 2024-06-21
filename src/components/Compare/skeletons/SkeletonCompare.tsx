export const SkeletonCompare = () => {
  return (
    <div className="flex justify-center gap-5 w-full mt-[60px] mobile:h-[400px] mobile:flex-col mobile:items-center">
      <div className="flex flex-row gap-5 mobile:flex-col animate-pulse">
        <div className="flex flex-col items-start gap-[10px] ">
          <div className="text-base text-white bg-slate-700" />
          <div className="AutoComplete">
            <div className="flex px-4 items-center w-[350px] h-[70px] md:h-[55px] md:w-[240px] mobile:w-[335px] mobile:h-[55px] rounded-lg border border-solid text-gray-F1 text-sm lg:text-base placeholder-gray-6E focus:outline-none border-gray-35 bg-slate-700" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <div className="text-base text-white bg-slate-700" />
          <div className="AutoComplete" />
        </div>
      </div>
      <div>
        <div className="Button" />
      </div>
    </div>
  );
};
