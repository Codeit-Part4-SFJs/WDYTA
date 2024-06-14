import { queryOptions } from '@tanstack/react-query';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { notFound } from 'next/navigation';
import { ProductDetailData } from '@/components/Compare/types';
import { compareQueryKeys } from './compareQueryKeyFactories';

export const compareFirstOptions = (
  productId1: number,
  accessToken: string,
) => {
  return queryOptions<ProductDetailData>({
    queryKey: compareQueryKeys.firstProduct(productId1),
    queryFn: async () => {
      const response = await getDetailProduct(productId1, accessToken);

      if (!response.ok) {
        notFound();
        console.error('1데이터');
      }

      return response.json();
    },
  });
};

export const compareSecondOptions = (
  productId2: number,
  accessToken: string,
) => {
  const productId = productId2 ?? undefined;
  return queryOptions<ProductDetailData>({
    queryKey: compareQueryKeys.secondProduct(productId),
    queryFn: async () => {
      const response = await getDetailProduct(productId, accessToken);
      if (!response.ok) {
        notFound();
        console.error('2데이터');
      }

      return response.json();
    },
  });
};

export const reCompareFirstOptions = (
  productId1: number,
  accessToken: string,
) => {
  return queryOptions<ProductDetailData>({
    queryKey: compareQueryKeys.firstProduct(productId1),
    queryFn: async () => {
      const response = await getDetailProduct(productId1, accessToken);

      if (!response.ok) {
        notFound();
        console.error('1데이터');
      }

      return response.json();
    },
    enabled: !!productId1,
  });
};

export const reCompareSecondOptions = (
  productId2: number,
  accessToken: string,
) => {
  const productId = productId2 ?? undefined;
  return queryOptions<ProductDetailData>({
    queryKey: compareQueryKeys.secondProduct(productId),
    queryFn: async () => {
      const response = await getDetailProduct(productId, accessToken);
      if (!response.ok) {
        notFound();
        console.error('2데이터');
      }

      return response.json();
    },
    enabled: !!productId2,
  });
};
