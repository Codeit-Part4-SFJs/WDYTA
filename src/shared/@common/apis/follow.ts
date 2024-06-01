import { API_FOLLOW } from './constants/API';

/**
 * 유저 팔로우
 */
export const getUserFollow = () => {
  return fetch(API_FOLLOW.FOLLOW, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/**
 * 유저 언팔로우
 */
export const deleteUserFollow = () => {
  return fetch(API_FOLLOW.FOLLOW, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
