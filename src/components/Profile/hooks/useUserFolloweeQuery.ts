import { useQuery } from '@tanstack/react-query';
import { getUserFollowees } from '@/shared/@common/apis';
import { API_USERS } from '@/shared/@common/apis/constants/API';

function useUserFolloweeQuery(userId: number) {
  return useQuery({
    queryKey: [API_USERS, userId],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserFollowees(userId);
      return response.json();
    },
  });
}

export default useUserFolloweeQuery;
