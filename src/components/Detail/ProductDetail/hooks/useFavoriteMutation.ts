import { ProductDetailData } from '@/components/Detail/types';
import { QueryClient, useMutation } from '@tanstack/react-query';
import {
  deleteFavoriteProduct,
  postFavoriteProduct,
} from '@/shared/@common/apis/product';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { profileKeys } from '@/app/profile/queryKeyFactories';

export const useFavoriteMutation = (
  queryClient: QueryClient,
  isFavorite: boolean,
  productId: number,
  accessToken: string,
  userId: number,
) => {
  return useMutation({
    mutationFn: async () => {
      if (isFavorite) {
        await deleteFavoriteProduct(productId, accessToken);
      } else {
        await postFavoriteProduct(productId, accessToken);
      }
    },
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: productKeys.detail(productId),
      });
      const previousFavorite = queryClient.getQueryData<ProductDetailData>(
        productKeys.detail(productId),
      );
      queryClient.setQueryData(
        productKeys.detail(productId),
        (prev: ProductDetailData) => ({
          ...prev,
          isFavorite: !isFavorite,
          favoriteCount: prev.favoriteCount + (isFavorite ? -1 : 1),
        }),
      );
      return { previousFavorite };
    },
    onError: (context: { previousFavorite?: ProductDetailData }) => {
      queryClient.setQueryData(
        productKeys.detail(productId),
        context.previousFavorite,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(productId),
      });
      queryClient.invalidateQueries({
        queryKey: profileKeys.productCard(userId, 'favoriteProduct'),
        refetchType: 'inactive',
      });
    },
  });
};
