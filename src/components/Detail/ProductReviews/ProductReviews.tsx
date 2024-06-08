'use client';

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
import {
  useQueryClient,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';
import { reviewsOptions } from '@/app/[category]/[product]/queryOptions';
import { useRouter } from 'next/navigation';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { ProductDetail } from '@/shared/@common/apis/product';
import { Loading } from '@/shared/ui/Icon';

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
  const queryClient = useQueryClient();
  const { data: productReviewsData } = useSuspenseInfiniteQuery(
    reviewsOptions(productId, accessToken, currentFilter),
  );

  const router = useRouter();
  const handleSelect = (value: string) => {
    router.replace(`/${category}/${productId}?order=${value}`, {
      scroll: false,
    });
  };

  const productDetailData: ProductDetail | undefined = queryClient.getQueryData(
    productKeys.detail(productId),
  );
  const isReviewed = productDetailData && productDetailData.reviewCount !== 0;

  return (
    <div className="flex flex-col gap-[30px] mb-[100px]">
      <div className="flex justify-between items-center">
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
