import { getQueryClient } from '@/app/getQueryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { Floating } from '@/shared/ui/Button/Floating';
import { Suspense } from 'react';
import { SkeletonMainProducts } from '@/components/Home/skeletons/SkeletonMainProducts';
import { FilteredProducts } from '@/components/Home/MainProducts/FilteredProducts/FilteredProducts';
import { SkeletonReviewerRanking } from '@/components/Home/skeletons/SkeletonReviewerRanking';
import { ReviewerRanking } from '@/components/Home/ReviewerRanking/ReviewerRanking';
import { convertCategoryToId } from '@/shared/@common/utils';
import { SideMenu, SideMenuOpenButton } from '@/shared/ui/Menu/SideMenu';
import { homeProductOptions, rankingOptions } from './homeQueryOptions';

const FilteredHome = ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { keyword: string; order: string | undefined };
}) => {
  const { category } = params;
  const currentCategoryId = convertCategoryToId(category);
  const currentSearchWord = searchParams.keyword;
  const currentFilter = searchParams.order;

  const queryClient = getQueryClient();
  queryClient.prefetchQuery(rankingOptions());
  queryClient.prefetchInfiniteQuery(
    homeProductOptions(currentSearchWord, currentCategoryId, currentFilter),
  );

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 lg:ml-auto lg:max-w-[1500px]">
      <div className="md:col-span-1 lg:col-span-2">
        <SideMenu currentCategoryId={convertCategoryToId(params.category)} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row md:col-span-4 lg:col-span-10 lg:justify-center mobile:ml-2 md:mr-2 lg:mr-auto">
        <main className="md:col-span-3 lg:col-span-7 p-4 lg:my-20 lg:mr-12 lg:flex-auto">
          <Suspense fallback={<SkeletonMainProducts />}>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <FilteredProducts
                currentSearchWord={currentSearchWord}
                category={currentCategoryId}
                currentFilter={currentFilter}
              />
            </HydrationBoundary>
          </Suspense>
          <div>
            <SideMenuOpenButton
              currentCategoryId={convertCategoryToId(params.category)}
            />
          </div>
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
};

export default FilteredHome;
