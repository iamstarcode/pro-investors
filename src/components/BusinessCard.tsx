import Image from 'next/image';
import { BusinessCardType } from '@/types';

import { ScrollArea, Button, Group } from '@mantine/core';
import Link from 'next/link';

export type BusinessCardProps = Pick<
    BusinessCardType,
    'id' | 'imgSrc' | 'title' | 'subtitle' | 'investors' | 'min' | 'raised'
>;

function BusinessCard({
    imgSrc,
    id,
    title,
    subtitle,
    investors,
    min,
    raised,
}: BusinessCardProps) {
    return (
        <Link href={`/business/${id}`}>
            <div className="card card-compact w-72 flex-shrink-0 bg-i-secondary">
                <figure>
                    <Image src={imgSrc} width={800} height={349} alt="business image" />
                </figure>
                <div className="p-2 text-white">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-bold">{title}</h2>
                            <p className="text-xs font-normal md:text-lg ">{subtitle}</p>
                        </div>
                        <Image
                            className="h-8"
                            src="/icons/bookmark.png"
                            width="32"
                            height="32"
                            alt="bookmark"
                        />
                    </div>

                    <div className="mt-2 flex justify-between space-x-2">
                        <div>
                            <h2 className="text-xs font-semibold md:text-xl">{raised}</h2>
                            <p className="text-[10px] font-normal md:text-lg">Raised</p>
                        </div>
                        <div>
                            <h2 className="text-xs font-semibold md:text-xl">{investors}</h2>
                            <p className="text-[10px] font-normal md:text-lg">Investors</p>
                        </div>
                        <div>
                            <h2 className="text-xs font-semibold md:text-xl">{min}</h2>
                            <p className="text-[10px] font-normal md:text-lg">
                                Min. Investment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BusinessCard;
