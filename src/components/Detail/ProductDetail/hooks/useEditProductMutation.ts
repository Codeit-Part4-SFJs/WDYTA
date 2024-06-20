import { ProductProps, patchProduct } from '@/shared/@common/apis/product';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface EditProductProps {
  accessToken: string;
  setErrorMessage: (message: string) => void;
  productId: number;
}

export const useEditProductMuation = ({
  accessToken,
  setErrorMessage,
  productId,
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
  });
};
