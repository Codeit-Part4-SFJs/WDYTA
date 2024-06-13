import { API_PRODUCT } from './constants/API';

interface ProductProps {
  categoryId: number;
  image: string;
  description: string;
  name: string;
}

/**
 * 상품목록조회
 */
export const getProductList = () => {
  return fetch(API_PRODUCT.PRODUCT);
};

/**
 * 홈페이지에서의 상품목록조회
 * @param keyword: 검색어
 * @param category: 카테고리 Id
 * @param order: 정렬 기준
 */
export const getHomeProductList = (
  keyword: string,
  category: number,
  order: string,
  pageParam: unknown,
) => {
  const currentPageParam = Number(pageParam);

  if (category) {
    return fetch(
      API_PRODUCT.PRODUCT_BY_CATEGORY(
        keyword,
        category,
        order,
        currentPageParam,
      ),
    );
  }
  return fetch(API_PRODUCT.PRODUCT_BY_SEARCH(keyword, order, currentPageParam));
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
  pageParam: unknown,
) => {
  const currentPageParam = Number(pageParam);

  return fetch(API_PRODUCT.REVIEWS(productId, filter, currentPageParam), {
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
