import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { PostReviewProps, postReview } from '@/shared/@common/apis';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface CreateReviewProps {
  accessToken: string;
  setErrorMessage: (message: string) => void;
  queryClient: QueryClient;
  productId: number;
  currentFilter: string;
}

export const useCreateReviewMutation = ({
  accessToken,
  setErrorMessage,
  queryClient,
  productId,
  currentFilter,
}: CreateReviewProps) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: PostReviewProps) => {
      const response = await postReview(data, accessToken);
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
