'use client';

import {
  ControlButtonsProps,
  ProductDetailData,
} from '@/components/Detail/types';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteReviewMutation } from '@/components/Detail/ProductReviews/hooks';
import { useRouter } from 'next/navigation';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';

export const ControlButtons = ({
  accessToken,
  reviewId,
  productId,
  filter,
  rating,
}: ControlButtonsProps) => {
  const currentFilter = filter ?? 'recent';

  const queryClient = useQueryClient();
  const productData = queryClient.getQueryData<ProductDetailData>(
    productKeys.detail(productId),
  );

  const deleteReviewMutation = useDeleteReviewMutation(
    queryClient,
    productId,
    accessToken,
    reviewId,
    currentFilter,
  );

  const handleDeleteClick = () => {
    deleteReviewMutation.mutate();
  };

  const router = useRouter();
  const handleEditClick = () => {
    router.push(
      `/modal/detail/reviewEdit?reviewId=${reviewId}&rating=${rating}&product=${productId}&category=${productData?.categoryId}&name=${productData?.name}&filter=${currentFilter}`,
      { scroll: false },
    );
  };

  return (
    <div className="flex gap-[10px] underline text-gray-9F">
      <button onClick={handleEditClick} type="button">
        수정
      </button>
      <button
        onClick={handleDeleteClick}
        disabled={deleteReviewMutation.isPending}
        className={`${deleteReviewMutation.isPending ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        type="button"
      >
        삭제
      </button>
    </div>
  );
};
