'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sort } from '@/shared/ui/Dropdown/Sort';
import { SORT_OPTIONS } from '@/components/Detail/constants';
import { ReviewCard } from '@/components/Detail/ProductReviews/ReviewCard';
import { ProductReviewsProps } from '@/components/Detail/types';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { reviewsOptions } from '@/app/[category]/[product]/queryOptions';
import { Loading } from '@/shared/ui/Icon';
import { SkeletonReviewCards } from '@/components/Detail/skeletons';

export const ProductReviews = ({
  productId,
  category,
  accessToken,
  userId,
  currentFilter,
}: ProductReviewsProps) => {
  const {
    data: productReviewsData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery(
    reviewsOptions(productId, accessToken, currentFilter),
  );

  const hasReview = productReviewsData.pages[0].list.length;

  const router = useRouter();
  const handleSelect = (filter: string) => {
    router.replace(`/${category}/${productId}?order=${filter}`, {
      scroll: false,
    });
  };

  const { ref: triggerRef, inView } = useInView();

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetchingNextPage, inView]);

  return (
    <div className="flex flex-col mb-[100px]">
      <div className="flex justify-between items-center mb-[30px]">
        <div className="mobile:text-lg md:text-base lg:text-xl text-gray-F1 not-italic leading-normal font-semibold lg:font-normal">
          상품 리뷰
        </div>
        <Sort
          defaultValue={currentFilter}
          options={SORT_OPTIONS}
          onSelect={handleSelect}
        />
      </div>
      {hasReview ? (
        productReviewsData.pages.map((page) => (
          <div
            key={page.nextCursor}
            className="flex flex-col gap-[15px] lg:gap-[20px]"
          >
            {page.list.map((review: any) => (
              <ReviewCard
                key={review.id}
                reviewData={review}
                userId={userId}
                accessToken={accessToken}
                filter={currentFilter}
              />
            ))}
            {isFetchingNextPage && <SkeletonReviewCards />}
            <div ref={triggerRef} />
          </div>
        ))
      ) : (
        <div className="mt-[70px]">
          <Loading>첫 리뷰를 작성해 보세요!</Loading>
        </div>
      )}
    </div>
  );
};
