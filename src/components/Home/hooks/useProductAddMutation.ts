// import { homeProductKeys } from '@/app/[category]/homeQueryKeyFactories';
import { ProductProps, postCreateProduct } from '@/shared/@common/apis/product';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface ProductAddProps {
  accessToken: string;
  setErrorMessage: (message: string) => void;
  // queryClient: QueryClient;
}

export const useProductAddMutation = ({
  accessToken,
  setErrorMessage,
  // queryClient,
}: ProductAddProps) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: ProductProps) => {
      const response = await postCreateProduct(data, accessToken);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return response.json();
    },
    onSuccess: () => {
      router.back();
      // queryClient.invalidateQueries({
      //   queryKey: homeProductKeys.all(),
      // });
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
};
