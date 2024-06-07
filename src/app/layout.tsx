import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
// import { Footer } from '@/layouts/Footer/Footer';
import { Header } from '@/layouts/Header/Header';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/assets/styles/index.scss';

const popins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Lumia',
  description: 'Lumia',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={popins.className}>
        <Header />
        {children}

      </body>
    </html>
  );
}
