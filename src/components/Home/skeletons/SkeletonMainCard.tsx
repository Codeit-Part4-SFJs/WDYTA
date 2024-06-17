export const SkeletonMainCard = () => {
  return (
    <div className="min-w-40 flex flex-col items-center justify-center pt-[10px] lg:pb-[20px] md:pb-[15px] mobile:pb-[10px] px-[10px] mobile:gap-[10px] md:gap-[20px] gap-[25px] mobile:w-full lg:max-w-[300px] border-gray-65 bg-slate-700 rounded-lg shadow-sm animate-pulse">
      <div className="w-full h-40 bg-gray-600 rounded-md mb-[10px]" />
      <div className="w-full h-6 bg-gray-600 rounded-md" />
      <div className="w-full h-6 bg-gray-600 rounded-md" />
    </div>
  );
};
