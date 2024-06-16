import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import {
  getProductListByOrder,
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
      const response = await getProductListByOrder('reviewCount');

      if (!response.ok) {
        notFound();
      }

      const hotProductsData = await response.json();
      return hotProductsData.list;
    },
    staleTime: 0.5 * 60 * 1000, // 데이터가 30초 동안 fresh 상태로 유지됨
    refetchInterval: 30000, // 30초마다 데이터를 자동으로 가져옴
  });
};

// page.tsx에서 별점 높은 상품 목록 요청을 위한 옵션
export const ratingDescProductOptions = () => {
  return queryOptions<Product[]>({
    queryKey: homeProductKeys.ratingProducts(),
    queryFn: async () => {
      const response = await getProductListByOrder('rating');

      if (!response.ok) {
        notFound();
      }

      const ratingDescProductsData = await response.json();
      return ratingDescProductsData.list;
    },
    staleTime: 0.5 * 60 * 1000, // 데이터가 30초 동안 fresh 상태로 유지됨
    refetchInterval: 30000, // 30초마다 데이터를 자동으로 가져옴
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
    staleTime: 60 * 1000, // 데이터가 1분 동안 fresh 상태로 유지됨
    refetchInterval: 60000, // 1분마다 데이터를 자동으로 가져옴
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
    staleTime: 60 * 1000, // 데이터가 1분 동안 fresh 상태로 유지됨
    refetchInterval: 60000, // 1분마다 데이터를 자동으로 가져옴
  });
};
