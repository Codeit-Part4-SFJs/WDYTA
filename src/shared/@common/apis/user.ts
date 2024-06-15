import { API_USERS } from './constants/API';

interface PatchMyInfoProps {
  description: string;
  nickname: string;
  image: string;
}

/**
 * 내 정보 조회
 */
export const getMyInfo = (accessToken: string) => {
  return fetch(API_USERS.MY_INFO, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 내 정보 수정
 * @param data 내 정보 수정 폼의 데이터
 */
export const patchMyInfo = (data: PatchMyInfoProps, accessToken: string) => {
  return fetch(API_USERS.MY_INFO, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

/**
 * 유저 랭킹 조회
 */
export const getUserRanking = () => {
  return fetch(API_USERS.RANKING);
};

/**
 * 유저 정보 조회
 */
export const getUserInfo = (userId: number, accessToken: string) => {
  return fetch(API_USERS.BY_ID(userId), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * 유저가 생성한 상품 조회
 */
export const getUserCreatedProducts = (userId: number, pageParam: number) => {
  return fetch(API_USERS.PRODUCT(userId, pageParam));
};

/**
 * 유저가 리뷰한 상품 조회
 */
export const getUserReviewedProducts = (userId: number, pageParam: number) => {
  return fetch(API_USERS.REVIEW(userId, pageParam));
};

/**
 * 유저가 찜한 상품 조회
 */
export const getUserFavoriteProducts = (userId: number, pageParam: number) => {
  return fetch(API_USERS.FAVORITE(userId, pageParam));
};

/**
 * 유저가 팔로우한 유저 조회
 */
export const getUserFollowees = (userId: number, pageParam: number) => {
  return fetch(API_USERS.FOLLOWEES(userId, pageParam));
};

/**
 * 유저를 팔로우한 유저 조회
 */
export const getUserFollowers = (userId: number, pageParam: number) => {
  return fetch(API_USERS.FOLLOWERS(userId, pageParam));
};
