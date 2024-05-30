import { StatisticsOptions } from '../types';

export const RATING_OPTIONS: StatisticsOptions = {
  title: '별점 평균',
  icon: 'StarIcon',
  className: 'w-6 h-6 fill-yellow',
  unit: '점 ',
  up: '더 높아요!',
  down: '더 낮아요!',
};

export const FAVORITE_OPTIONS: StatisticsOptions = {
  title: '찜',
  icon: 'SaveIcon',
  className: 'w-6 h-6 fill-red',
  unit: '개 ',
  up: '더 많아요!',
  down: '더 적어요!',
};

export const REVIEW_OPTIONS: StatisticsOptions = {
  title: '리뷰',
  icon: 'ReviewIcon',
  className: 'w-6 h-6 fill-main-gradation',
  unit: '개 ',
  up: '더 많아요!',
  down: '더 적어요!',
};
