import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import '@/assets/styles/index.scss';
import { Header } from '@/layouts/Header/Header';
// import { Footer } from '@/layouts/Footer/Footer';

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

        <div
          style={{
            height: '100vh',
            scrollSnapType: 'y mandatory',
            overflowY: 'scroll',
          }}
        >
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
