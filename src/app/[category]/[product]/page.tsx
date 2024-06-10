import { cookies } from 'next/headers';
import { getQueryClient } from '@/app/getQueryClient';
import { ProductDetail } from '@/components/Detail/ProductDetail';
import { Floating } from '@/shared/ui/Button/Floating';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import {
  productOptions,
  reviewsOptions,
} from '@/app/[category]/[product]/queryOptions';
import { Suspense } from 'react';
import {
  SkeletonProductDetail,
  SkeletonProductReviews,
  SkeletonProductStatistics,
} from '@/components/Detail/skeletons';
import { ProductStatistics } from '@/components/Detail/ProductStatistics';
import { ProductReviews } from '@/components/Detail/ProductReviews';

const DetailPage = ({
  params,
  searchParams,
}: {
  params: { category: string; product: string };
  searchParams: { order: string | undefined };
}) => {
  const { category } = params;
  const productId = Number(params.product);
  const currentFilter = searchParams.order;
  const accessToken = cookies().get('accessToken')?.value ?? '';
  const userId = Number(cookies().get('userId')?.value);

  const queryClient = getQueryClient();
  queryClient.prefetchQuery(productOptions(productId, accessToken));
  queryClient.prefetchInfiniteQuery(
    reviewsOptions(productId, accessToken, currentFilter),
  );

  return (
    <div className="lg:mx-auto lg:max-w-[940px] flex flex-col gap-[60px]">
      <Suspense fallback={<SkeletonProductDetail />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductDetail
            userId={userId}
            productId={productId}
            accessToken={accessToken}
          />
        </HydrationBoundary>
      </Suspense>

      <Suspense fallback={<SkeletonProductStatistics />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductStatistics productId={productId} accessToken={accessToken} />
        </HydrationBoundary>
      </Suspense>

      <Suspense fallback={<SkeletonProductReviews />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductReviews
            userId={userId}
            category={category}
            productId={productId}
            accessToken={accessToken}
            currentFilter={currentFilter}
          />
        </HydrationBoundary>
      </Suspense>

      <Floating />
    </div>
  );
};

export default DetailPage;
