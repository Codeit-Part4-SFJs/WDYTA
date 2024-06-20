import { API_OAUTH } from './constants/API';

interface OuathProps {
  appKey: string;
  provider: 'google' | 'kakao';
}
/**
 * 간편 로그인 App 등록/수정
 */
export const oauth = (data: OuathProps) => {
  return fetch(API_OAUTH.OAUTH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
