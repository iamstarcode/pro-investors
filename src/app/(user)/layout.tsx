import localFont from 'next/font/local';

import '@/app/globals.css';

import { Inter } from 'next/font/google';

import DashboardDrawer from '@/components/DashboardDrawer';

import Footer from '@/partials/footer';

const inter = Inter({ subsets: ['latin'] });

const myFont = localFont({
  src: '../../../public/fonts/Satoshi-Variable.woff2',
});

export const metadata = {
  title: 'Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={` mx-auto w-full text-[#313131]`}>
        <DashboardDrawer>
          {children}
        </DashboardDrawer>
      </div>
      <Footer />
    </>
  );
}
