import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/shared/@common/apis';
import { API_USERS } from '@/shared/@common/apis/constants/API';

function useUserInfoSuspenseQuery(userId: number, accessToken: string) {
  return useSuspenseQuery({
    queryKey: [API_USERS, userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserInfo(userId, accessToken);
      return response.json();
    },
  });
}

export default useUserInfoSuspenseQuery;
