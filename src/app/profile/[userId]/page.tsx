import { getQueryClient } from '@/app/getQueryClient';
import { ProfilePageComponent } from '@/components/Profile';
import { getUserInfo } from '@/shared/@common/apis';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';

interface ProfileProps {
  params: {
    userId: string;
  };
}
export default function Profile({ params }: ProfileProps) {
  const { userId } = params;
  const accessTokenCookie = cookies().get('accessToken');
  const accessToken = accessTokenCookie ? accessTokenCookie.value : '';
  const loginedIdcookie = cookies().get('userId');
  const loginedId = loginedIdcookie ? loginedIdcookie.value : null;

  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserInfo(Number(userId), accessToken);
      return response.json();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePageComponent
        loginedId={loginedId}
        accessToken={accessToken}
        currentProfileId={userId}
      />
    </HydrationBoundary>
  );
}
