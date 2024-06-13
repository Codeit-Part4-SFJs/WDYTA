import { queryOptions } from '@tanstack/react-query';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { notFound } from 'next/navigation';
import { compareQueryKeys } from './compareQueryKeyFactories';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  isFavorite: boolean;
  category: {
    id: number;
    name: string;
  };
  categoryMetric: {
    rating: number;
    favoriteCount: number;
    reviewCount: number;
  };
}

export const compareFirstOptions = (
  productId1: number,
  accessToken: string,
) => {
  return queryOptions<Product>({
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
  return queryOptions<Product>({
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
  return queryOptions<Product>({
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
  return queryOptions<Product>({
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
