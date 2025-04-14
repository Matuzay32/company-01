'use client';

import './globals.css';

import HeaderGlobal from '@/components/ui/Headers/headerGlobal';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer/Footer';
import LoadingBar from '@/components/Loadding/LoadingBar';
import { CartProvider } from './context/cart-context';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Rutas donde NO se debe mostrar header/footer
  const hiddenLayoutRoutes = ['/elite', '/kuro'];

  const shouldHideLayout = hiddenLayoutRoutes.includes(pathname);

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-900 text-white scroll-smooth`}
      >
        {/* <LoadingBar /> */}

        {!shouldHideLayout && <HeaderGlobal />}
        <CartProvider>{children}</CartProvider>
        {!shouldHideLayout && <Footer />}
      </body>
    </html>
  );
}
