import { FormValues } from '../types/input';
import { API_AUTH } from './constants/API';

export interface AuthProps {
  nickname?: string;
  redirectUri: string;
  token: string;
}

/**
 * 회원가입
 */
export const postSignUp = (data: FormValues) => {
  return fetch(API_AUTH.SIGN_UP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

/**
 * 로그인
 */
export const postSignIn = (data: FormValues) => {
  return fetch(API_AUTH.SIGN_IN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

/**
 * 간편 회원가입
 * @param provider : google 또는 kakao
 */
export const postSimpleSignUp = (provider: string, data: AuthProps) => {
  return fetch(API_AUTH.SIGN_UP_PROVIDER(provider), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

/**
 * 간편 로그인
 * @param provider : google 또는 kakao
 */
export const postSimpleSignIn = (provider: string, data: AuthProps) => {
  return fetch(API_AUTH.SIGN_IN_PROVIDER(provider), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
