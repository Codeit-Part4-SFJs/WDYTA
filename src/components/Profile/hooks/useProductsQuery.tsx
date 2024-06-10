'use Client';

import { useSuspenseQuery } from '@tanstack/react-query';
import {
  getUserCreatedProducts,
  getUserFavoriteProducts,
  getUserReviewedProducts,
} from '@/shared/@common/apis';
import { ProfileKeys } from '@/app/profile/[userId]/queryKeyFactories';
import { ProductMenuType } from '../types/productType';

const useProductsQuery = (
  currentProfileId: number,
  activeMenu: ProductMenuType,
) => {
  const productMenuInfo = {
    '리뷰 남긴 상품': {
      queryKey: 'reviewedProduct',
      apiFunc: getUserReviewedProducts,
      content: '첫 리뷰를 남겨 보세요!',
    },
    '찜한 상품': {
      queryKey: 'favoriteProduct',
      apiFunc: getUserFavoriteProducts,
      content: '찜한 상품이 없습니다!',
    },
    '등록한 상품': {
      queryKey: 'createdProduct',
      apiFunc: getUserCreatedProducts,
      content: '등록한 상품이 없습니다!',
    },
  } as const;

  const { data } = useSuspenseQuery({
    queryKey: ProfileKeys.productCard(
      currentProfileId,
      productMenuInfo[activeMenu].queryKey,
    ),
    queryFn: async () => {
      if (!currentProfileId) return null;
      const response =
        await productMenuInfo[activeMenu].apiFunc(currentProfileId);
      return response.json();
    },
  });
  const productsList = data?.list || [];

  return { productsList, content: productMenuInfo[activeMenu].content };
};
export default useProductsQuery;
