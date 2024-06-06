import { queryOptions } from '@tanstack/react-query';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { productKeys } from '@/app/[category]/[product]/queryKeyFactories';
import { notFound } from 'next/navigation';

export const productOptions = (productId: number, accessToken: string) => {
  return queryOptions({
    queryKey: productKeys.detail(productId),
    queryFn: async () => {
      const response = await getDetailProduct(productId, accessToken);

      if (!response.ok) {
        notFound();
      }

      return response.json();
    },
  });
};
