'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

function DashboardDrawer({ children }: { children: ReactNode }) {
    const pathName = usePathname();

    const CustomLink = ({
        href,
        text,
        imageSrc,
    }: {
        href: string;
        text: string;
        imageSrc: string;
    }) => {
        return (
            <li>
                <Link
                    className={`${pathName === href
                        ? 'rounded-full bg-accent font-semibold text-black'
                        : ''
                        } text-grey-darkest px-4 py-2 text-lg no-underline hover:text-i-secondary-400`}
                    href={href}
                >
                    <Image src={imageSrc} height="24" width="24" alt="wallet" />
                    {text}
                </Link>
            </li>
        );
    };

    const links = [
        {
            href: '/dashboard',
            text: 'Dashboard',
            imageSrc: '/icons/wallet.svg',
        },
    ];

    const linksJsx = links.map((link: any, index) => (
        <CustomLink
            key={index}
            href={link.href}
            text={link.text}
            imageSrc={link.imageSrc}
        />
    ));
    return (
        <>
            <div className="drawer drawer-end lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {children}
                </div>
                <div className="drawer-side">
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
                                <span className="text-lg text-accent lg:text-4xl">Pro</span>
                                <span className="text-lg lg:text-4xl">Investors</span>
                            </p>
                        </div>

                        {linksJsx}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default DashboardDrawer;
