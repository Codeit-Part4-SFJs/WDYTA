import {
  FAVORITE_OPTIONS,
  RATING_OPTIONS,
  REVIEW_OPTIONS,
} from '@/components/Detail/constants';
import { StatisticProps, StatisticType } from '@/components/Detail/types';
import { Icon } from '@/shared/ui/Icon';
import { PRODUCT_MOCK } from '@/components/Detail/mock';

const Statistic = ({ type, typeValue, categoryMetric }: StatisticProps) => {
  const makeOptionsByType = {
    [StatisticType.rating]: RATING_OPTIONS,
    [StatisticType.favorite]: FAVORITE_OPTIONS,
    [StatisticType.review]: REVIEW_OPTIONS,
  };

  const statisticDiff = typeValue - categoryMetric;

  return (
    <div className="mobile:p-5 md:px-[74px] md:py-[30px] lg:px-[74px] lg:py-[30px] mobile:rounded-2xl md:rounded-lg lg:rounded-lg bg-black-25 border border-gray-35">
      <div className="mobile:flex mobile:gap-[10px]">
        <div className=" mobile:text-gray-F1 mobile:text-sm md:text-base lg:text-lg not-italic font-medium leading-normal">
          {makeOptionsByType[type].title}
        </div>
        <div className="flex gap-[5px]">
          <Icon
            name={makeOptionsByType[type].icon}
            className={makeOptionsByType[type].className}
          />
          <div>{typeValue}</div>
        </div>
      </div>
      <div>
        같은 카테고리의 제품들보다
        <br />
        <span>
          {type === 'rating'
            ? Math.abs(statisticDiff).toFixed(1)
            : Math.abs(statisticDiff)}
          {makeOptionsByType[type].unit}
        </span>
        {statisticDiff >= 0
          ? makeOptionsByType[type].up
          : makeOptionsByType[type].down}
      </div>
    </div>
  );
};

export const ProductStatistics = () => {
  // 여기서 API 요청
  const productDetailData = PRODUCT_MOCK;

  return (
    <div>
      <div>
        <div>상품 통계</div>
      </div>
      <div className="mobile:flex-col flex gap-[15px]">
        <Statistic
          type={StatisticType.rating}
          typeValue={productDetailData.rating}
          categoryMetric={productDetailData.categoryMetric.rating}
        />
        <Statistic
          type={StatisticType.favorite}
          typeValue={productDetailData.favoriteCount}
          categoryMetric={productDetailData.categoryMetric.favoriteCount}
        />
        <Statistic
          type={StatisticType.review}
          typeValue={productDetailData.reviewCount}
          categoryMetric={productDetailData.categoryMetric.reviewCount}
        />
      </div>
    </div>
  );
};
