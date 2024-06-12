'use Client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
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
  const {
    data: productData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery(
    productOptions(
      currentProfileId,
      activeMenu,
      productMenuInfo[activeMenu].apiFunc,
    ),
  );
  return {
    productData,
    fetchNextPage,
    isFetchingNextPage,
    content: productMenuInfo[activeMenu].content,
  };
};
export default useProductsQuery;
