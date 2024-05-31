import { API_IMAGE } from './constants/API';

/**
 * 이미지
 */
export const postImage = (accessToken: string, data: FormData) => {
  return fetch(API_IMAGE.UPLOAD, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
    body: data,
  });
};
