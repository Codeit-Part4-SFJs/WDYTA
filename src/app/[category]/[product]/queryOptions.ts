import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import {
  getDetailProduct,
  getProductReviewList,
} from '@/shared/@common/apis/product';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { notFound } from 'next/navigation';
import { ProductDetailData, ReviewsDataPage } from '@/components/Detail/types';

export const productOptions = (productId: number, accessToken: string) => {
  return queryOptions<ProductDetailData>({
    queryKey: productKeys.detail(productId),
    queryFn: async () => {
      const response = await getDetailProduct(productId, accessToken);

      if (!response.ok) {
        notFound();
      }

      return response.json();
    },
  });
};

export const reviewsOptions = (
  productId: number,
  accessToken: string,
  currentFilter: string | undefined,
) => {
  const filter = currentFilter ?? 'recent';

  return infiniteQueryOptions<ReviewsDataPage>({
    queryKey: productKeys.reviews(productId, filter),
    queryFn: async ({ pageParam }) => {
      const response = await getProductReviewList(
        productId,
        accessToken,
        filter,
        pageParam,
      );

      if (!response.ok) {
        notFound();
      }

      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
