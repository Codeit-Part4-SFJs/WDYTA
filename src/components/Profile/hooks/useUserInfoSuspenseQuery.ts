import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/shared/@common/apis';
import { ProfileKeys } from '@/app/profile/[userId]/queryKeyFactories';

function useUserInfoSuspenseQuery(userId: number, accessToken: string) {
  return useSuspenseQuery({
    queryKey: ProfileKeys.user(userId),
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserInfo(userId, accessToken);
      return response.json();
    },
  });
}

export default useUserInfoSuspenseQuery;
