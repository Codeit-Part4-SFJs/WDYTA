import { API_PRODUCT } from './constants/API';

interface ProductProps {
  categoryId: number;
  image: string;
  description: string;
  name: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  isFavorite: boolean;
  favoriteCount: number;
  categoryMetric: {
    rating: number;
    reviewCount: number;
    favoriteCount: number;
  };
}

/**
 * 상품목록조회
 */
export const getProductList = () => {
  return fetch(API_PRODUCT.PRODUCT);
};

/**
 * 상품 생성
 * @param data: categoryId(카테고리 Id), image(상품 이미지), description(상품 설명), name(상품 이름)
 */
export const postCreateProduct = (data: ProductProps, accessToken: string) => {
  return fetch(API_PRODUCT.PRODUCT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

/**
 * 상세 상품 조회
 * @param productId: 상품 Id
 */
export const getDetailProduct = (productId: number, accessToken: string) => {
  return fetch(API_PRODUCT.BY_ID(productId), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 상품 수정
 * @param productId : 상품 Id
 * @param data: categoryId(카테고리 Id), image(상품 이미지), description(상품 설명), name(상품 이름)
 */
export const patchProduct = (
  productId: number,
  data: ProductProps,
  accessToken: string,
) => {
  return fetch(API_PRODUCT.BY_ID(productId), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

/**
 * 상품 리뷰 목록 조회
 * @param productId : 상품 Id
 */

export const getProductReviewList = (
  productId: number,
  accessToken: string,
  filter: string,
  pageParam: number,
) => {
  return fetch(API_PRODUCT.REVIEWS(productId, filter, pageParam), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 상품 찜하기
 * @param productId : 상품 Id
 */

export const postFavoriteProduct = (productId: number, accessToken: string) => {
  return fetch(API_PRODUCT.FAVORITE(productId), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 상품 찜하기 취소
 * @param productId : 상품 Id
 */

export const deleteFavoriteProduct = (
  productId: number,
  accessToken: string,
) => {
  return fetch(API_PRODUCT.FAVORITE(productId), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
