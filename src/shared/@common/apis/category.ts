import { API_CATEGORY } from './constants/API';

/**
 * 카테고리 조회
 */
export const getCategory = () => {
  return fetch(API_CATEGORY.CATEGORY);
};
