'use client';

import { Icon } from '@/shared/ui/Icon';
import {
  FavoriteButtonProps,
  ProductDetailData,
} from '@/components/Detail/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  deleteFavoriteProduct,
  postFavoriteProduct,
} from '@/shared/@common/apis/product';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { useRouter } from 'next/navigation';

export const DetailFavoriteButton = ({
  isFavorite,
  productId,
  accessToken,
}: FavoriteButtonProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const favoriteMutation = useMutation({
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
    },
  });

  const handleClick = () => {
    if (!accessToken) {
      router.push('/login');
    }
    favoriteMutation.mutate();
  };

  return (
    <button onClick={handleClick} type="button">
      {isFavorite ? (
        <Icon
          name="SaveIcon"
          className="mobile:w-[24px] md:w-[24px] lg:w-[28px] mobile:h-[24px] md:h-[24px] lg:h-[28px] fill-red"
        />
      ) : (
        <Icon
          name="UnSaveIcon"
          className="mobile:w-[24px] md:w-[24px] lg:w-[28px] mobile:h-[24px] md:h-[24px] lg:h-[28px] fill-gray-6E"
        />
      )}
    </button>
  );
};
