'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import { useEffect } from 'react';

export const links = [
    {
        href: '/dashboard',
        text: 'Dashboard',
        imageSrc: '/icons/wallet.svg',
    },
];
const DashboardLinks = ({
    href,
    text,
    imageSrc,
}: {
    href: string;
    text: string;
    imageSrc: string;
}) => {
    const pathName = usePathname();

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

export const linksJsx = links.map((link: any, index) => (
    <DashboardLinks
        key={index}
        href={link.href}
        text={link.text}
        imageSrc={link.imageSrc}
    />
));

export default DashboardLinks;
