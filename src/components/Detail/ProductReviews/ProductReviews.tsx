'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sort } from '@/shared/ui/Dropdown/Sort';
import { SORT_OPTIONS } from '@/components/Detail/constants';
import { ReviewProfile } from '@/components/Detail/ProductReviews/ReviewProfile';
import {
  ProductReviewsProps,
  ReviewCardProps,
} from '@/components/Detail/types';
import { ReviewLikeButton } from '@/components/Detail/ProductReviews/ReviewLikeButton';
import { convertCreatedAt } from '@/shared/@common/utils';
import { ReviewImage } from '@/components/Detail/ProductReviews/ReviewImage';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { reviewsOptions } from '@/app/[category]/[product]/queryOptions';
import { Loading } from '@/shared/ui/Icon';
import { SkeletonReviewCards } from '@/components/Detail/skeletons';

const ReviewCard = ({ reviewData }: ReviewCardProps) => {
  return (
    <div className="w-full mobile:gap-[30px] md:gap-[60px] lg:gap-[80px] p-[20px] lg:p-[30px] mobile:rounded-2xl md:rounded-lg lg:rounded-lg mobile:flex-col flex border border-solid border-gray-35 bg-black-25">
      <ReviewProfile rating={reviewData.rating} reviewUser={reviewData.user} />
      <div className="flex flex-col gap-[15px] overflow-hidden">
        <div className="flex flex-col gap-[20px] md:gap-[40px] lg:gap-[20px]">
          <div className="lg:text-base lg:leading-[22px] text-xs leading-4 text-gray-F1 not-italic font-normal">
            {reviewData.content}
          </div>
          <div className="flex gap-[10px] lg:gap-[20px] flex-nowrap overflow-x-scroll overflow-y-hidden">
            {reviewData.reviewImages.map((reviewImage) => (
              <ReviewImage key={reviewImage.id} src={reviewImage.source} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="mobile:text-xs lg:text-sm text-gray-6E not-italic leading-normal font-normal">
            {convertCreatedAt(reviewData.createdAt)}
          </div>
          <ReviewLikeButton />
        </div>
      </div>
    </div>
  );
};

export const ProductReviews = ({
  productId,
  category,
  accessToken,
  // userId,
  currentFilter,
}: ProductReviewsProps) => {
  const {
    data: productReviewsData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery(
    reviewsOptions(productId, accessToken, currentFilter),
  );

  const isReviewed = productReviewsData.pages[0].list[0] !== undefined;

  const router = useRouter();
  const handleSelect = (value: string) => {
    router.replace(`/${category}/${productId}?order=${value}`, {
      scroll: false,
    });
  };

  const { ref: triggerRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

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
      {isReviewed ? (
        productReviewsData.pages.map((page) => (
          <div
            key={page.nextCursor}
            className="flex flex-col gap-[15px] lg:gap-[20px]"
          >
            {page.list.map((review: any) => (
              <ReviewCard key={review.id} reviewData={review} />
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
