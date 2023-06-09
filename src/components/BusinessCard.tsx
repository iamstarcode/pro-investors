import Image from 'next/image';

import { ScrollArea, Button, Group } from '@mantine/core';

export type BusinessCardProps = {
    id?: string;
    imgSrc: string;
    name: string,
    thumb: string
    discription: string
    title: string;
    subtitle: string
    raised: string,
    min: string,
    investors: number
};
function BusinessCard({ imgSrc, title, subtitle, investors, min, raised }: BusinessCardProps) {
    return (
        <div className="card card-compact w-72 flex-shrink-0 bg-i-secondary">
            <figure>
                <Image src={imgSrc} width={800} height={349} alt="business image" />
            </figure>
            <div className="p-2 text-white">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-lg font-bold">{title}</h2>
                        <p className='font-normal md:text-lg '>{subtitle}</p>
                    </div>
                    <Image
                        className='h-8'
                        src="/icons/bookmark.png"
                        width="32"
                        height="32"
                        alt="bookmark"
                    />
                </div>

                <div className='mt-2 flex justify-between space-x-2'>
                    <div>
                        <h2 className='text-xs md:text-xl font-semibold'>{raised}</h2>
                        <p className='text-[10px] md:text-lg font-normal'>Raised</p>
                    </div>
                    <div>
                        <h2 className='text-xs md:text-xl font-semibold'>{investors}</h2>
                        <p className='text-[10px] md:text-lg font-normal'>Investors</p>
                    </div>
                    <div>
                        <h2 className='text-xs md:text-xl font-semibold'>{min}</h2>
                        <p className='text-[10px] md:text-lg font-normal'>Min. Investment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;
