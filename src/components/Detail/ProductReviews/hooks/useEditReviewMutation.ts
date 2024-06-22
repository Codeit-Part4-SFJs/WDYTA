import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { PatchReviewProps, patchReview } from '@/shared/@common/apis';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface EditReviewProps {
  accessToken: string;
  setErrorMessage: (message: string) => void;
  queryClient: QueryClient;
  productId: number;
  currentFilter: string;
  reviewId: number;
}

export const useEditReviewMutation = ({
  accessToken,
  setErrorMessage,
  queryClient,
  productId,
  currentFilter,
  reviewId,
}: EditReviewProps) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: PatchReviewProps) => {
      const response = await patchReview(reviewId, data, accessToken);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    },
    onSuccess: () => {
      router.back();
    },
    onError: (error) => {
      setErrorMessage(error.message);
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
