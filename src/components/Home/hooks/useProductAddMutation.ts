// import { homeProductKeys } from '@/app/[category]/homeQueryKeyFactories';
import { ProductProps, postCreateProduct } from '@/shared/@common/apis/product';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
// import { convertIdToCategory } from '@/shared/@common/utils';

interface ProductAddProps {
  accessToken: string;
  setErrorMessage: (message: string) => void;
  // productCategoryId: number;
  // queryClient: QueryClient;
}

export const useProductAddMutation = ({
  accessToken,
  setErrorMessage,
  // productCategoryId,
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
      // -> 데이터가 바로 반영되지는 않지만 모달이 바로 꺼짐
      // router.push(`/${convertIdToCategory(productCategoryId)}`);
      // -> 데이터가 바로 반영되지만 모달이 안 꺼짐
      //
      // queryClient.invalidateQueries({
      //   queryKey: homeProductKeys.all(),
      // });
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
};
