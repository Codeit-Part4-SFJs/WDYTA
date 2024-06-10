import { getQueryClient } from '@/app/getQueryClient';
import { ProfileKeys } from '@/app/profile/[userId]/queryKeyFactories';
import { ActivitySection } from '@/components/Profile/ActivitySection';
import { ProductSection } from '@/components/Profile/ProductSection';
import { ProfileCard } from '@/components/Profile/ProfileCard';
import { getUserInfo } from '@/shared/@common/apis';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { Floating } from '@/shared/ui/Button/Floating';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

interface ProfilePageComponentProps {
  userId: number;
}

export const ProfilePageComponent = ({ userId }: ProfilePageComponentProps) => {
  const { loginedId, accessToken } = getUserCookies();
  const currentProfileId = Number(userId) || Number(loginedId);

  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: ProfileKeys.user(Number(currentProfileId)),
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserInfo(Number(userId), accessToken);
      return response.json();
    },
  });

  return (
    <main className="flex justify-center items-start md:flex-col mobile:flex-col md:items-center mobile:items-center md:min-w-[509px] mobile:min-w-[335px] lg:gap-[70px] gap-[60px] py-[52px] lg:px-[20px] md:px-[100px] mobile:px-[21px] ">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileCard loginedId={Number(loginedId)} accessToken={accessToken} />
      </HydrationBoundary>
      <div className="flex flex-col grow lg:gap-[80px] gap-[60px] max-w-[940px] md:w-full mobile:w-full">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ActivitySection />
        </HydrationBoundary>
        {/* product prefetch 추가 예정 */}
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductSection loginedId={Number(loginedId)} />
        </HydrationBoundary>
      </div>
      <Floating />
    </main>
  );
};
