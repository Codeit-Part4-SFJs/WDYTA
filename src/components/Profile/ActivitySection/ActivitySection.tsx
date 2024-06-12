import { ActivityCard } from '@/components/Profile/ActivitySection/ActivityCard';
import { ActivityData } from '@/components/Profile/types/userActivityType';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';

const activityData: ActivityData[] = [
  { title: '남긴 별점 평균', icon: 'StarIcon' },
  { title: '남긴 리뷰', icon: 'ReviewIcon' },
  { title: '관심 카테고리' },
] as const;

export const ActivitySection = () => {
  const { loginedId, accessToken } = getUserCookies();
  return (
    <section className="flex flex-col gap-[30px]">
      <h1 className="lg:text-xl text-lg  text-gray-F1">활동 내역</h1>
      <div className="flex justify-between lg:gap-[20px] gap-[15px]">
        {activityData.map((activity) => (
          <ActivityCard
            key={activity.title}
            title={activity.title}
            icon={activity.icon}
            accessToken={accessToken}
            loginedId={loginedId}
          />
        ))}
      </div>
    </section>
  );
};
