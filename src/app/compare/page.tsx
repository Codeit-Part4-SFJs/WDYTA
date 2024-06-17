import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { SkeletonProductDetail } from '@/components/Detail/skeletons';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Floating } from '@/shared/ui/Button/Floating';
import ComparingButton from '@/components/Compare/ComparingButton';
// import ComparingButton2 from '@/components/Compare/ComparingButton2';
import { compareFirstOptions, compareSecondOptions } from './queryOptions';
import { getQueryClient } from '../getQueryClient';

const Compare = ({
  searchParams,
}: {
  searchParams: { product1: number | undefined; product2: number | undefined };
}) => {
  const productId1 = searchParams.product1;
  const productId2 = searchParams.product2;
  console.log('1:', productId1, '2', productId2);
  const accessToken = cookies().get('accessToken')?.value ?? '';
  // const userId = Number(cookies().get('userId')?.value);

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(compareFirstOptions(productId1, accessToken));

  queryClient.prefetchQuery(compareSecondOptions(productId2, accessToken));

  return (
    <>
      <Suspense fallback={<SkeletonProductDetail />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ComparingButton
            productId1={productId1}
            productId2={productId2}
            accessToken={accessToken}
          />
        </HydrationBoundary>
      </Suspense>

      <Floating />
    </>
  );
};

export default Compare;
