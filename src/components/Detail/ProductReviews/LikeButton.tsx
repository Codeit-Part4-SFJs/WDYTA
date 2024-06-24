'use client';

import { useRouter } from 'next/navigation';
import { ThumbsChip } from '@/shared/ui/Chip/ThumbsChip';
import { ReviewLikeButtonProps } from '@/components/Detail/types';
import { useQueryClient } from '@tanstack/react-query';
import { useLikeMutation } from '@/components/Detail/ProductReviews/hooks';

export const LikeButton = ({
  isLike,
  likeCount,
  reviewId,
  accessToken,
  productId,
  filter,
}: ReviewLikeButtonProps) => {
  const currentFilter = filter ?? 'recent';
  const router = useRouter();
  const queryClient = useQueryClient();

  const likeMutation = useLikeMutation(
    queryClient,
    isLike,
    productId,
    accessToken,
    reviewId,
    currentFilter,
  );

  const handleClick = () => {
    if (!accessToken) {
      router.push('/modal/common/loginAlert', {
        scroll: false,
      });
    }
    likeMutation.mutate();
  };

  return (
    <button onClick={handleClick} type="button">
      <ThumbsChip isLike={isLike} likeCount={likeCount} />
    </button>
  );
};
