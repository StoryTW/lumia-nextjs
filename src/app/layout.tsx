import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer } from '@/layouts/Footer/Footer';
import { Header } from '@/layouts/Header/Header';
import '@/assets/styles/index.scss';

const popins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Lumia',
  description: 'Lumia',
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
        <Footer />
      </body>
    </html>
  );
}
