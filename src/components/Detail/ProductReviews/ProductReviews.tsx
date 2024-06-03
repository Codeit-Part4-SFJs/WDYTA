'use client';

import { REVIEWS_MOCK } from '@/components/Detail/mock';
import { Sort } from '@/shared/ui/Dropdown/Sort';
import { SORT_OPTIONS } from '@/components/Detail/constants';
import { ReviewProfile } from '@/components/Detail/ProductReviews/ReviewProfile';
import { ReviewCardProps } from '@/components/Detail/types';
import { ReviewLikeButton } from '@/components/Detail/ProductReviews/ReviewLikeButton';
import { convertCreatedAt } from '@/shared/@common/utils';
import { ReviewImage } from '@/components/Detail/ProductReviews/ReviewImage';

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

export const ProductReviews = () => {
  // 여기서 API 호출
  const productReviewsData = REVIEWS_MOCK.list;

  const handleSelect = () => {};

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex justify-between items-center">
        <div className="mobile:text-lg md:text-base lg:text-xl text-gray-F1 not-italic leading-normal font-semibold lg:font-normal">
          상품 리뷰
        </div>
        <Sort options={SORT_OPTIONS} onSelect={handleSelect} />
      </div>
      <div className="flex flex-col gap-[15px] lg:gap-[20px]">
        {productReviewsData.map((item) => (
          <ReviewCard key={item.id} reviewData={item} />
        ))}
      </div>
    </div>
  );
};
