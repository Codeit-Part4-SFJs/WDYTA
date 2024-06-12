'use client';

import { ControlButtonsProps } from '@/components/Detail/types';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteReviewMutation } from '@/components/Detail/ProductReviews/hooks';

export const ControlButtons = ({
  accessToken,
  reviewId,
  productId,
  filter,
}: ControlButtonsProps) => {
  const currentFilter = filter ?? 'recent';

  const queryClient = useQueryClient();

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

  const handleEditClick = () => {
    alert('리뷰 수정 모달 열림');
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
