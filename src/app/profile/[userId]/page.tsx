import { getQueryClient } from '@/app/getQueryClient';
import { ProfilePageComponent } from '@/components/Profile';
import { getUserInfo } from '@/shared/@common/apis';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { ProfileKeys } from './queryKeyFactories';

interface ProfileProps {
  params: {
    userId: string;
  };
}
export default function Profile({ params }: ProfileProps) {
  const { userId } = params;
  const { loginedId, accessToken } = getUserCookies();
  const currentProfileId = Number(userId) || loginedId;
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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePageComponent
        accessToken={accessToken}
        loginedId={Number(loginedId)}
      />
    </HydrationBoundary>
  );
}
