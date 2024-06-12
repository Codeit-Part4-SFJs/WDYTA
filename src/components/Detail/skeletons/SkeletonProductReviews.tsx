const SkeletonReviewCard = () => {
  return (
    <div className="animate-pulse w-full mobile:gap-[30px] md:gap-[60px] lg:gap-[80px] p-[20px] lg:p-[30px] mobile:rounded-2xl md:rounded-lg lg:rounded-lg mobile:flex-col md:flex-row lg:flex-row flex border border-solid border-gray-35 bg-black-25">
      <div className="lg:h-[42px] md:h-[36px] mobile:h-[36px] flex items-center gap-[10px]">
        <div className="mobile:w-[36px] mobile:h-[36px] md:w-[36px] md:h-[36px] lg:w-[42px] lg:h-[42px] rounded-full bg-slate-700" />
        <div className="flex flex-col gap-[5px]">
          <div className="w-[70px] h-[20px] lg:w-[90px] lg:h-[24px] bg-slate-700 rounded-lg" />
          <div className="w-[70px] h-[13px] lg:w-[90px] lg:h-[15px] bg-slate-700 rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] md:gap-[40px] lg:gap-[20px] w-full">
        <div className="flex flex-col gap-[5px]">
          <div className="w-full h-[20px] bg-slate-700 rounded-lg" />
          <div className="w-full h-[20px] bg-slate-700 rounded-lg" />
          <div className="w-full h-[20px] bg-slate-700 rounded-lg" />
        </div>
        <div className="flex gap-[10px] lg:gap-[20px]">
          <div className="mobile:w-[60px] mobile:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-slate-700 rounded-lg" />
          <div className="mobile:w-[60px] mobile:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-slate-700 rounded-lg" />
          <div className="mobile:w-[60px] mobile:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-slate-700 rounded-lg" />
        </div>
        <div className="w-[200px] h-[15px] bg-slate-700 rounded-lg" />
      </div>
    </div>
  );
};

export const SkeletonReviewCards = () => {
  return (
    <div className="flex flex-col gap-[15px] lg:gap-[20px]">
      <SkeletonReviewCard />
      <SkeletonReviewCard />
      <SkeletonReviewCard />
      <SkeletonReviewCard />
      <SkeletonReviewCard />
      <SkeletonReviewCard />
    </div>
  );
};

export const SkeletonProductReviews = () => {
  return (
    <div className="flex flex-col mb-[100px]">
      <div className="flex justify-start items-center mb-[30px] mobile:text-lg md:text-base lg:text-xl text-gray-F1 not-italic leading-normal font-semibold lg:font-normal">
        상품 리뷰
      </div>

      <div className="flex flex-col gap-[15px] lg:gap-[20px]">
        <SkeletonReviewCard />
        <SkeletonReviewCard />
        <SkeletonReviewCard />
        <SkeletonReviewCard />
        <SkeletonReviewCard />
        <SkeletonReviewCard />
      </div>
    </div>
  );
};
