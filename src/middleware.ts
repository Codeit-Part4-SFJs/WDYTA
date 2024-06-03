import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * 지금은 로그인 상태일 때 로그인, 회원가입 페이지 접근만 리다이렉션 처리하고 나머지는 주석 처리함
 * 프로젝트 완성 후 비회원 접근 불가 페이지의 경로를 PROTECTED_PAGES 배열에 추가 요망
 * 어떤 상황에서 미들웨어를 사용할 지 좀 더 세세한 설정이 가능함. 일단 가장 기본적인 형태로 세팅함.
 */

// 1. auth page 와 로그인 이후 접근 가능한 protected page 분류
const AUTH_PAGES = ['/login', '/register'];
// const PROTECTED_PAGES = [];

export function middleware(request: NextRequest) {
  // 2. 경로 확인해서 auth page와 protected page 구분
  const { nextUrl, cookies } = request;
  const path = nextUrl.pathname;
  // const isProtectedPage = PROTECTED_PAGES.includes(path);
  const isAuthPage = AUTH_PAGES.includes(path);

  // 3. 쿠키로 로그인 유무 확인
  const accessToken = cookies.get('accessToken');

  // 4. 로그인 안된 상태로 protected page 접근 시 리다이렉션
  // if (isProtectedPage && !accessToken) {
  //   return NextResponse.redirect(new URL('/login', request.nextUrl));
  // }

  // 5. 로그인 된 상태로 auth page 접근 시 메인 페이지로 리다이렉션
  if (isAuthPage && accessToken) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  return NextResponse.next();
}
