import { ActivityCard } from './ActivityCard';

export const ActivitySection = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <h1 className="lg:text-[20px] text-[18px]  text-gray-F1">활동 내역</h1>
      <div className="flex justify-between lg:gap-[20px] gap-[15px]">
        <ActivityCard title="남긴 별점 평균" icon="StarIcon" />
        <ActivityCard title="남긴 리뷰" icon="ReviewIcon" />
        <ActivityCard title="관심 카테고리" />
      </div>
    </section>
  );
};
