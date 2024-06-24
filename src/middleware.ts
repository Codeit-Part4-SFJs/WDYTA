import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * 로그인된 상태에서 인증 관련 페이지 접근 시 안내 모달 띄우고 홈으로 리다이렉션
 */

const AUTH_PAGES = ['/login', '/register', '/oauth'];

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const path = nextUrl.pathname;
  const isAuthPage = AUTH_PAGES.includes(path);

  const accessToken = cookies.get('accessToken');

  if (isAuthPage && accessToken) {
    return NextResponse.redirect(
      new URL('/modal/common/authAlert', request.nextUrl),
    );
  }

  return NextResponse.next();
}
