'use client';

import { Icon } from '@/shared/ui/Icon';
import { FavoriteButtonProps } from '@/components/Detail/types';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useFavoriteMutation } from '@/components/Detail/ProductDetail/hooks';

export const FavoriteButton = ({
  userId,
  isFavorite,
  productId,
  accessToken,
}: FavoriteButtonProps) => {
  const router = useRouter();
  const queryClient: QueryClient = useQueryClient();

  const favoriteMutation = useFavoriteMutation(
    queryClient,
    isFavorite,
    productId,
    accessToken,
    userId,
  );

  const handleClick = () => {
    if (!accessToken) {
      router.push('/modal/common/loginAlert', {
        scroll: false,
      });
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
