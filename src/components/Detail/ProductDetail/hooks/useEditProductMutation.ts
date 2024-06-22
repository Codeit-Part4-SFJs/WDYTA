import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { ProductProps, patchProduct } from '@/shared/@common/apis/product';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface EditProductProps {
  accessToken: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  productId: number;
  queryClient: QueryClient;
  currentFilter: string;
}

export const useEditProductMuation = ({
  accessToken,
  setErrorMessage,
  productId,
  queryClient,
  currentFilter,
}: EditProductProps) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: ProductProps) => {
      const response = await patchProduct(productId, data, accessToken);
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
