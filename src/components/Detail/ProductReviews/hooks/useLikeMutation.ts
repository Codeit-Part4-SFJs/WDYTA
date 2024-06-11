import {
  Review,
  ReviewsDataAllPages,
  ReviewsDataPage,
} from '@/components/Detail/types';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteLike, postLike } from '@/shared/@common/apis';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';

export const useLikeMutation = (
  queryClient: QueryClient,
  isLike: boolean,
  productId: number,
  accessToken: string,
  reviewId: number,
  currentFilter: string,
) => {
  return useMutation({
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
      const previousReviews = queryClient.getQueryData<ReviewsDataAllPages>(
        productKeys.reviews(productId, currentFilter),
      );
      queryClient.setQueryData(
        productKeys.reviews(productId, currentFilter),
        (prev: ReviewsDataAllPages) => {
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
    onError: (context: { previousReviews?: ReviewsDataAllPages }) => {
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
};
