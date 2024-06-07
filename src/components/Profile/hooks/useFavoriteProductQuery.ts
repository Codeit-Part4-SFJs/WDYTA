import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserFavoriteProducts } from '@/shared/@common/apis';
import { API_USERS } from '@/shared/@common/apis/constants/API';

function useFavoriteProduct(userId: number) {
  return useSuspenseQuery({
    queryKey: [API_USERS.FAVORITE, userId, 'favoriteProduct'],
    queryFn: async () => {
      if (!userId) return null;
      const response = await getUserFavoriteProducts(userId);
      return response.json();
    },
  });
}

export default useFavoriteProduct;
