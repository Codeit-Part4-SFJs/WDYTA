'use client';

import { ReviewProfile } from '@/components/Detail/ProductReviews/ReviewProfile';
import { ReviewCardProps } from '@/components/Detail/types';
import { LikeButton } from '@/components/Detail/ProductReviews/LikeButton';
import { convertCreatedAt } from '@/shared/@common/utils';
import { ReviewImage } from '@/components/Detail/ProductReviews/ReviewImage';
import { ControlButtons } from '@/components/Detail/ProductReviews/ControlButtons';

export const ReviewCard = ({
  reviewData,
  userId,
  accessToken,
  filter,
}: ReviewCardProps) => {
  const isMyReview = userId === reviewData.userId;

  return (
    <div className="w-full mobile:gap-[30px] md:gap-[60px] lg:gap-[80px] p-[20px] lg:p-[30px] mobile:rounded-2xl md:rounded-lg lg:rounded-lg mobile:flex-col flex border border-solid border-gray-35 bg-black-25">
      <ReviewProfile rating={reviewData.rating} reviewUser={reviewData.user} />
      <div className="w-full flex flex-col gap-[15px] overflow-hidden">
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
          <div className="flex mobile:gap-[15px] md:gap-[20px] lg:gap-[20px] mobile:text-xs lg:text-sm text-gray-6E not-italic leading-normal font-normal">
            {convertCreatedAt(reviewData.createdAt)}
            {isMyReview && (
              <ControlButtons
                accessToken={accessToken}
                reviewId={reviewData.id}
                productId={reviewData.productId}
                filter={filter}
              />
            )}
          </div>
          <LikeButton
            isLike={reviewData.isLiked}
            likeCount={reviewData.likeCount}
            reviewId={reviewData.id}
            accessToken={accessToken}
            productId={reviewData.productId}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};
