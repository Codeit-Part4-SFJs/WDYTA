import { IconType } from '@/shared/ui/Icon/types/iconType';
import { HTMLAttributes } from 'react';

export interface StatisticProps {
  type: 'rating' | 'favorite' | 'review';
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
