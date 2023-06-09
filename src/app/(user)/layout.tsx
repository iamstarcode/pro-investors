import localFont from 'next/font/local';
import Image from 'next/image';

import '@/app/globals.css';

import { Inter } from 'next/font/google';

import { Providers } from '../providers';
import DashboardDrawer from '@/components/DashboardDrawe';

import { links, linksJsx } from '@/components/DashboardLinks';
import DashboardLinks from '@/components/DashboardLinks';
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
    <html lang="en">
      <body className={`${myFont.className} bg-white text-[#F2F2F2]`}>
        <Providers>
          <div className={` mx-auto w-full text-[#313131]`}>
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col">
                <div className="px-4 pt-4">
                  <div className="hidden flex-1 items-center justify-between lg:flex">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input-bordered input w-full max-w-sm"
                    />

                    <div className="inline-flex items-center space-x-4">
                      <Image
                        className="w-8"
                        src="/icons/alert.svg"
                        width="32"
                        height="32"
                        alt="logo"
                      />

                      <div className="inline-flex items-center space-x-2">
                        <Image
                          src="/img/avatar1.png"
                          width="40"
                          height="40"
                          alt="yellow rating"
                        />
                        <div className="block">
                          <p className="text-sm font-medium">Daniel james</p>
                          <p className="text-xs font-medium">
                            danieladams67@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between lg:hidden">
                    <div className="inline-flex items-center font-medium">
                      <Image
                        className="w-8"
                        src="/icons/logo.png"
                        width="32"
                        height="32"
                        alt="logo"
                      />
                      <p>
                        <span className="text-lg text-accent lg:text-4xl">
                          Pro
                        </span>
                        <span className="text-lg text-black lg:text-4xl">
                          Investors
                        </span>
                      </p>
                    </div>
                    <div className="inline-flex items-center space-x-4">
                      <Image
                        className="w-8"
                        src="/icons/search.svg"
                        width="32"
                        height="32"
                        alt="logo"
                      />
                      <Image
                        className="w-8"
                        src="/icons/alert.svg"
                        width="32"
                        height="32"
                        alt="logo"
                      />
                      <label htmlFor="my-drawer-2" className="p-0">
                        <Image
                          src="/icons/hamburger.svg"
                          height="24"
                          width="24"
                          alt="wallet"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {children}
              </div>
              <div className="drawer-side z-40">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu h-full w-80 space-y-2 bg-i-secondary-600 p-4 text-white">
                  <div className="mb-5 inline-flex items-center font-medium">
                    <Image
                      className="w-16"
                      src="/logo.png"
                      width="109"
                      height="78"
                      alt="logo"
                    />
                    <p>
                      <span className="text-lg text-accent lg:text-4xl">
                        Pro
                      </span>
                      <span className="text-lg lg:text-4xl">Investors</span>
                    </p>
                  </div>
                  {linksJsx}
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
