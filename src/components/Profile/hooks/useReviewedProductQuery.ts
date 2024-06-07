import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserReviewedProducts } from '@/shared/@common/apis';
import { API_USERS } from '@/shared/@common/apis/constants/API';

function useReviewedProductQuery(userId: number) {
  return useSuspenseQuery({
    queryKey: [API_USERS.REVIEW, userId, 'reviewedProduct'],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserReviewedProducts(userId);
      return response.json();
    },
  });
}

export default useReviewedProductQuery;
