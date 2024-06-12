import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteReview } from '@/shared/@common/apis';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';

export const useDeleteReviewMutation = (
  queryClient: QueryClient,
  productId: number,
  accessToken: string,
  reviewId: number,
  currentFilter: string,
) => {
  return useMutation({
    mutationFn: async () => {
      await deleteReview(reviewId, accessToken);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.reviews(productId, currentFilter),
      });
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(productId),
      });
    },
  });
};
