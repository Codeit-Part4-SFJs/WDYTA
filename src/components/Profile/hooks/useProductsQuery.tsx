'use Client';

import { useSuspenseQuery } from '@tanstack/react-query';
import {
  getUserCreatedProducts,
  getUserFavoriteProducts,
  getUserReviewedProducts,
} from '@/shared/@common/apis';
import { productOptions } from '@/app/profile/queryOptions';

type ProductMenuItem = {
  apiFunc: any;
  content: string;
};

export const productMenuInfo: Record<string, ProductMenuItem> = {
  reviewedProduct: {
    apiFunc: getUserReviewedProducts,
    content: '첫 리뷰를 남겨 보세요!',
  },
  favoriteProduct: {
    apiFunc: getUserFavoriteProducts,
    content: '찜한 상품이 없습니다!',
  },
  createdProduct: {
    apiFunc: getUserCreatedProducts,
    content: '등록한 상품이 없습니다!',
  },
} as const;

const useProductsQuery = (currentProfileId: number, activeMenu: string) => {
  console.log(productMenuInfo[activeMenu]);
  const { data } = useSuspenseQuery(
    productOptions(
      currentProfileId,
      activeMenu,
      productMenuInfo[activeMenu].apiFunc,
    ),
  );

  const productsList = data?.list || [];

  return { productsList, content: productMenuInfo[activeMenu].content };
};
export default useProductsQuery;
