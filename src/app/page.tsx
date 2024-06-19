import { getQueryClient } from '@/app/getQueryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { SideMenu } from '@/shared/ui/Menu/SideMenu';
import { Floating } from '@/shared/ui/Button/Floating';
import { Suspense } from 'react';
import { SkeletonMainProducts } from '@/components/Home/skeletons/SkeletonMainProducts';
import { SkeletonReviewerRanking } from '@/components/Home/skeletons/SkeletonReviewerRanking';
import { HotProducts } from '@/components/Home/MainProducts/HotProducts/HotProducts';
import { RatingDescProducts } from '@/components/Home/MainProducts/RatingDescProducts/RatingDescProducts';
import { ReviewerRanking } from '@/components/Home/ReviewerRanking/ReviewerRanking';
import {
  hotProductOptions,
  ratingDescProductOptions,
  rankingOptions,
} from './[category]/homeQueryOptions';

export default function Home() {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(hotProductOptions());
  queryClient.prefetchQuery(ratingDescProductOptions());
  queryClient.prefetchQuery(rankingOptions());

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 lg:mx-auto lg:max-w-[1450px]">
      <div className="md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="flex flex-col-reverse lg:flex-row md:col-span-4 lg:col-span-10 lg:justify-center mobile:ml-2 md:mr-2">
        <main className="md:col-span-3 lg:col-span-7 p-4 lg:my-14 lg:mr-12 lg:flex-auto">
          <Suspense fallback={<SkeletonMainProducts />}>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <HotProducts />
            </HydrationBoundary>
          </Suspense>
          <Suspense fallback={<SkeletonMainProducts />}>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <RatingDescProducts />
            </HydrationBoundary>
          </Suspense>
        </main>
        <Suspense fallback={<SkeletonReviewerRanking />}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ReviewerRanking />
          </HydrationBoundary>
        </Suspense>
      </div>
      <Floating />
    </div>
  );
}
