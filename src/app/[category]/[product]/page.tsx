import { cookies } from 'next/headers';
import { getQueryClient } from '@/app/getQueryClient';
import { ProductDetail } from '@/components/Detail/ProductDetail';
import { Floating } from '@/shared/ui/Button/Floating';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { productOptions } from '@/app/[category]/[product]/queryOptions';
import { Suspense } from 'react';
import {
  SkeletonProductDetail,
  SkeletonProductStatistics,
} from '@/components/Detail/skeletons';
import { ProductStatistics } from '@/components/Detail/ProductStatistics';

const DetailPage = ({ params }: { params: { product: string } }) => {
  const productId = Number(params.product);
  const accessToken = cookies().get('accessToken')?.value ?? '';
  const userId = Number(cookies().get('userId')?.value);

  const queryClient = getQueryClient();
  queryClient.prefetchQuery(productOptions(productId, accessToken));

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
      <Floating />
    </div>
  );
};

export default DetailPage;
