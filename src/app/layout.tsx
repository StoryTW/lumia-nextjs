import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/assets/styles/index.scss';
import { ReactNode } from 'react';

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
      <body className={popins.className}>{children}</body>
    </html>
  );
}
