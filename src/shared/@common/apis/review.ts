import { API_REVIEWS } from './constants/API';

export interface PostReviewProps {
  productId: number;
  images: string[];
  content: string;
  rating: number;
}

interface Image {
  id?: number;
  source?: string;
}

interface PatchReviewProps {
  images: Image[];
  content: string;
  rating: number;
}

/**
 * 리뷰 좋아요
 */
export const postLike = (reviewId: number, accessToken: string) => {
  return fetch(API_REVIEWS.LIKE(reviewId), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 리뷰 좋아요 취소
 */
export const deleteLike = (reviewId: number, accessToken: string) => {
  return fetch(API_REVIEWS.LIKE(reviewId), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 리뷰 생성
 * @param data 리뷰 생성 모달의 폼 데이터
 */
export const postReview = (data: PostReviewProps, accessToken: string) => {
  return fetch(API_REVIEWS.CREATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

/**
 * 리뷰 삭제
 */
export const deleteReview = (reviewId: number, accessToken: string) => {
  return fetch(API_REVIEWS.BY_ID(reviewId), {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 리뷰 수정
 * @param data 리뷰 수정 모달의 폼 데이터
 */
export const patchReview = (
  reviewId: number,
  data: PatchReviewProps,
  accessToken: string,
) => {
  return fetch(API_REVIEWS.BY_ID(reviewId), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};
