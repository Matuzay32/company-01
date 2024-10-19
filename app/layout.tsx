import HeaderGlobal from '@/components/ui/headerGlobal';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Agency Landing Page',
  description:
    'Elevate your digital presence with our web and app development services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <HeaderGlobal></HeaderGlobal>
        {children}
      </body>
    </html>
  );
}
