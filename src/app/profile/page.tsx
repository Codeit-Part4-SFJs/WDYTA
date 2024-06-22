import { getQueryClient } from '@/app/getQueryClient';
import { ActivitySection } from '@/components/Profile/ActivitySection';
import { ProductSection } from '@/components/Profile/ProductSection';
import { ProfileCard } from '@/components/Profile/ProfileCard';
import { getUserCookies } from '@/shared/@common/utils/getUserCookies';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { productMenuInfo } from '@/components/Profile/hooks/useProductsQuery';
import { Suspense } from 'react';
import { SkeletonProfileCard } from '@/components/Profile/skeleton/SkeletonProfileCard';
import {
  SkeletonProductSection,
  SkeletonActivitySection,
} from '@/components/Profile/skeleton';

import { redirect } from 'next/navigation';
import { TAB_NAMES_ORIGIN } from '@/components/Profile/constants/productMenu';
import { productOptions, profileOptions } from './queryOptions';

interface ProfileProps {
  searchParams: {
    tab: string;
    userId: string;
    type: string;
  };
}
export default function Profile({ searchParams }: ProfileProps) {
  const { loginedId, accessToken } = getUserCookies();
  const userId = searchParams.userId ?? loginedId;
  const currentMenu = searchParams.tab ?? TAB_NAMES_ORIGIN.reviewedProduct;
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(profileOptions(Number(userId), accessToken));

  queryClient.prefetchInfiniteQuery(
    productOptions(
      Number(userId),
      currentMenu,
      productMenuInfo[currentMenu].apiFunc,
    ),
  );
  if (!accessToken && !userId) {
    redirect('/login');
  }
  return (
    <main className="flex justify-center items-start md:flex-col mobile:flex-col md:items-center mobile:items-center md:min-w-[509px] mobile:min-w-[335px] lg:gap-[70px] gap-[60px] py-[52px] lg:px-[120px] md:px-[30px] mobile:px-[21px] ">
      <Suspense fallback={<SkeletonProfileCard />}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProfileCard loginedId={loginedId} accessToken={accessToken} />
        </HydrationBoundary>
      </Suspense>
      <div className="flex flex-col grow lg:gap-[80px] gap-[60px] max-w-[940px] md:w-full mobile:w-full">
        <Suspense fallback={<SkeletonActivitySection />}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ActivitySection />
          </HydrationBoundary>
        </Suspense>
        <Suspense fallback={<SkeletonProductSection />}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductSection loginedId={loginedId} />
          </HydrationBoundary>
        </Suspense>
      </div>
    </main>
  );
}
