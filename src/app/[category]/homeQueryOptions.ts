import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import {
  getProductList,
  getHomeProductList,
} from '@/shared/@common/apis/product';
import { getUserRanking } from '@/shared/@common/apis';
import { notFound } from 'next/navigation';
import { Product, ProductsDataPage } from '@/components/Home/types/ProductType';
import { Ranking } from '@/components/Home/types/RankingType';
import { homeProductKeys, homeRankingKeys } from './homeQueryKeyFactories';

// page.tsx에서 핫한 상품 목록 요청을 위한 옵션
export const hotProductOptions = () => {
  return queryOptions<Product[]>({
    queryKey: homeProductKeys.hotProducts(),
    queryFn: async () => {
      const response = await getProductList();

      if (!response.ok) {
        notFound();
      }

      const hotProductsData = await response.json();
      return hotProductsData.list
        .sort((a: Product, b: Product) => b.reviewCount - a.reviewCount)
        .slice(0, 6);
    },
  });
};

// page.tsx에서 별점 높은 상품 목록 요청을 위한 옵션
export const ratingDescProductOptions = () => {
  return queryOptions<Product[]>({
    queryKey: homeProductKeys.ratingProducts(),
    queryFn: async () => {
      const response = await getProductList();

      if (!response.ok) {
        notFound();
      }

      const ratingDescProductsData = await response.json();
      return ratingDescProductsData.list
        .sort((a: Product, b: Product) => b.rating - a.rating)
        .slice(0, 6);
    },
  });
};

// page.tsx에서 랭킹 목록 요청을 위한 옵션
export const rankingOptions = () => {
  return queryOptions<Ranking[]>({
    queryKey: homeRankingKeys.all,
    queryFn: async () => {
      const response = await getUserRanking();

      if (!response.ok) {
        notFound();
      }

      return response.json();
    },
  });
};

// [category]/page.tsx에서 동적으로 변하는 데이터 요청을 위한 옵션
export const homeProductOptions = (
  keyword: string,
  category: number,
  currentOrder: string | undefined,
) => {
  const order = currentOrder ?? 'recent';

  return infiniteQueryOptions<ProductsDataPage>({
    queryKey: homeProductKeys.homeProducts(keyword, category, order),
    queryFn: async ({ pageParam }) => {
      const response = await getHomeProductList(
        keyword,
        category,
        order,
        pageParam,
      );

      if (!response.ok) {
        notFound();
      }

      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
