'use client';

import { useRouter } from 'next/navigation';
import { ThumbsChip } from '@/shared/ui/Chip/ThumbsChip';
import {
  Review,
  ReviewsData,
  ReviewsDataPage,
  ReviewLikeButtonProps,
} from '@/components/Detail/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLike, postLike } from '@/shared/@common/apis';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';

export const ReviewLikeButton = ({
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

  const likeMutation = useMutation({
    mutationFn: async () => {
      if (isLike) {
        await deleteLike(reviewId, accessToken);
      } else {
        await postLike(reviewId, accessToken);
      }
    },
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: productKeys.reviews(productId, currentFilter),
      });
      const previousReviews = queryClient.getQueryData<ReviewsData>(
        productKeys.reviews(productId, currentFilter),
      );
      queryClient.setQueryData(
        productKeys.reviews(productId, currentFilter),
        (prev: ReviewsData) => {
          if (!prev) return prev;

          const updatedPages = prev.pages.map((page: ReviewsDataPage) => ({
            ...page,
            list: page.list.map((review: Review) => {
              if (review.id === reviewId) {
                return {
                  ...review,
                  isLiked: !isLike,
                  likeCount: isLike
                    ? Math.max(review.likeCount - 1, 0)
                    : review.likeCount + 1,
                };
              }
              return review;
            }),
          }));

          return { ...prev, pages: updatedPages };
        },
      );

      return { previousReviews };
    },
    onError: (context: { previousReviews?: ReviewsData }) => {
      queryClient.setQueryData(
        productKeys.reviews(productId, currentFilter),
        context.previousReviews,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.reviews(productId, currentFilter),
      });
    },
  });

  const handleClick = () => {
    if (!accessToken) {
      router.push('/login');
    }
    likeMutation.mutate();
  };

  return (
    <button onClick={handleClick} type="button">
      <ThumbsChip isLike={isLike} likeCount={likeCount} />
    </button>
  );
};
