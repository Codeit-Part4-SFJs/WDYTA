import { IconType } from '@/shared/ui/Icon/types/iconType';
import { HTMLAttributes } from 'react';

export enum StatisticType {
  rating = 'rating',
  favorite = 'favorite',
  review = 'review',
}

export interface StatisticProps {
  type: StatisticType;
  typeValue: number;
  categoryMetric: number;
}

export interface StatisticsOptions {
  title: string;
  icon: IconType;
  className: HTMLAttributes<SVGAElement>['className'];
  unit: string;
  up: string;
  down: string;
}
