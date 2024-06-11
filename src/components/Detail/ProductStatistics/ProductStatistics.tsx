'use client';

import { ProductStatisticsProps } from '@/components/Detail/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { productOptions } from '@/app/[category]/[product]/queryOptions';
import { Statistic } from '@/components/Detail/ProductStatistics/Statistic';

export const ProductStatistics = ({
  productId,
  accessToken,
}: ProductStatisticsProps) => {
  const { data: productDetailData } = useSuspenseQuery(
    productOptions(productId, accessToken),
  );

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="mobile:text-lg md:text-base lg:text-xl lg:font-normal font-semibold not-italic leading-normal text-gray-F1">
        상품 통계
      </div>
      <div className="mobile:flex-col flex gap-[15px] justify-center">
        <Statistic
          type="rating"
          typeValue={productDetailData.rating}
          categoryMetric={productDetailData.categoryMetric.rating}
        />
        <Statistic
          type="favorite"
          typeValue={productDetailData.favoriteCount}
          categoryMetric={productDetailData.categoryMetric.favoriteCount}
        />
        <Statistic
          type="review"
          typeValue={productDetailData.reviewCount}
          categoryMetric={productDetailData.categoryMetric.reviewCount}
        />
      </div>
    </div>
  );
};
