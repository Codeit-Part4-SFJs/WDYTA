import { ActivityCard } from './ActivityCard';
import { ActivityCardProps } from './types/userActivityType';

const activityData: ActivityCardProps[] = [
  { title: '남긴 별점 평균', icon: 'StarIcon' },
  { title: '남긴 리뷰', icon: 'ReviewIcon' },
  { title: '관심 카테고리' },
];

export const ActivitySection = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <h1 className="lg:text-[20px] text-[18px]  text-gray-F1">활동 내역</h1>
      <div className="flex justify-between lg:gap-[20px] gap-[15px]">
        {activityData.map((activity) => (
          <ActivityCard
            key={activity.title}
            title={activity.title}
            icon={activity.icon}
          />
        ))}
      </div>
    </section>
  );
};
