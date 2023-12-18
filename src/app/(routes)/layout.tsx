import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import { ReactNode } from 'react';
import ProviderReactQuery from '@services/common/ProviderReactQuery';
import { cls } from '@utils/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIM',
  description: 'Auto Internet Protocol address Manager'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cls(inter.className, 'w-full h-[100vh]')}>
        <ProviderReactQuery>{children}</ProviderReactQuery>
      </body>
    </html>
  );
}
