import '@/styles/globals.css';
import { Gnb } from '@/shared/ui/Menu/Gnb';
import localFont from 'next/font/local';
import Providers from '@/app/providers';
import Script from 'next/script';

export const metadata = {
  title: 'WDYTA',
  description: 'What Do You Think About?',
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Providers>
          <Gnb />
          {children}
          {modal}
        </Providers>
      </body>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
        crossOrigin="anonymous"
        integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY}
      />
    </html>
  );
}
