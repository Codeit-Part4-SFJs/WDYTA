import '@/styles/globals.css';
import { Gnb } from '@/shared/ui/Menu/Gnb';
import localFont from 'next/font/local';

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Gnb />
        {children}
      </body>
    </html>
  );
}
