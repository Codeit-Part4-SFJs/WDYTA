import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserCreatedProducts } from '@/shared/@common/apis';
import { API_USERS } from '@/shared/@common/apis/constants/API';

function useCreatedProductQuery(userId: number) {
  return useSuspenseQuery({
    queryKey: [API_USERS.PRODUCT, userId, 'createdProduct'],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserCreatedProducts(userId);
      return response.json();
    },
  });
}

export default useCreatedProductQuery;
