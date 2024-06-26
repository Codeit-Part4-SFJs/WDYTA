'use client';

import {
  RATING_OPTIONS,
  FAVORITE_OPTIONS,
  REVIEW_OPTIONS,
} from '@/components/Detail/constants';
import { StatisticProps, StatisticsOptions } from '@/components/Detail/types';
import { Icon } from '@/shared/ui/Icon';

const makeOptionsByType: {
  [key: string]: StatisticsOptions;
} = {
  rating: RATING_OPTIONS,
  favorite: FAVORITE_OPTIONS,
  review: REVIEW_OPTIONS,
};

export const Statistic = ({
  type,
  typeValue,
  categoryMetric,
}: StatisticProps) => {
  const statisticDiff = typeValue - categoryMetric;

  return (
    <div className="lg:max-w-[300px] lg:gap-[20px] lg:flex-col lg:flex lg:p-[30px] md:p-[30px] md:gap-[15px] md:flex-col md:flex mobile:flex mobile:flex-col mobile:gap-[5px] mobile:p-5 mobile:rounded-2xl md:rounded-lg lg:rounded-lg bg-black-25 border border-gray-35 not-italic text-gray-6E leading-normal w-full">
      <div className="lg:items-center lg:gap-[20px] lg:flex-col lg:flex md:gap-[15px] md:flex-col md:flex md:items-center mobile:flex mobile:items-center mobile:gap-[10px] leading-normal">
        <div className="lg:text-lg md:text-base mobile:text-sm text-gray-F1 font-medium mobile:font-light">
          {makeOptionsByType[type].title}
        </div>
        <div className="lg:items-center flex gap-[5px]">
          <Icon
            name={makeOptionsByType[type].icon}
            className={makeOptionsByType[type].className}
          />
          <div className="lg:text-2xl md:text-xl mobile:text-base mobile:font-light leading-normal text-gray-9F">
            {type === 'rating'
              ? typeValue && Math.abs(typeValue).toFixed(1)
              : typeValue}
          </div>
        </div>
      </div>
      <div className="lg:text-sm lg:justify-center lg:flex lg:flex-col md:font-light md:text-xs md:justify-center md:flex md:flex-col mobile:flex mobile:font-light mobile:text-xs mobile:leading-[18px]">
        <div className="lg:text-center md:text-center">
          같은 카테고리의 제품들보다
        </div>
        <div className="lg:flex lg:justify-center md:flex md:justify-center">
          &nbsp;
          <span className="text-gray-F1">
            {type === 'rating'
              ? statisticDiff && Math.abs(statisticDiff).toFixed(1)
              : Math.abs(statisticDiff).toFixed(0)}
            {makeOptionsByType[type].unit}
          </span>
          &nbsp;
          {statisticDiff >= 0
            ? makeOptionsByType[type].up
            : makeOptionsByType[type].down}
        </div>
      </div>
    </div>
  );
};
