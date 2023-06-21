'use client';
import Image from 'next/image';
import { BusinessCardType } from '@/types';
import { Tabs } from '@mantine/core';

import data from '@/data/business.json';

type BusinessType = Pick<
    BusinessCardType,
    | 'id'
    | 'name'
    | 'subtitle'
    | 'about'
    | 'thumb'
    | 'discription'
    | 'imgSrcInfo'
    | 'raised'
    | 'min'
    | 'investors'
>;

function Page({ params }: { params: { id: string } }) {
    const business: BusinessType[] = JSON.parse(JSON.stringify(data));
    const biz: BusinessType | undefined = business.find(
        biz => biz.id == params.id,
    );
    return (
        <>
            <div className="mt-5 px-4 py-4">
                <div className="inline-flex items-center space-x-4">
                    <Image
                        src={biz?.thumb ?? ''}
                        width="40"
                        height="40"
                        alt="google icon"
                    />
                    <div>
                        <h2 className="text-base font-bold lg:text-4xl">{biz?.name}</h2>
                        <p className="text-xs font-normal md:text-base ">{biz?.subtitle}</p>
                    </div>
                </div>
                <p className="mt-2 text-xs font-normal text-[#A09E9E]">
                    {biz?.discription}
                </p>

                <div className="mt-5 flex space-x-2 md:space-x-7">
                    <div className="basis-1/2">
                        <Image
                            className="h-full "
                            src={biz?.imgSrcInfo ?? ''}
                            style={{ objectFit: 'cover' }}
                            width="800"
                            height="349"
                            alt="google icon"
                        />
                    </div>
                    <div className="basis-1/2">
                        <div className="block">
                            <h2 className="text-lg font-bold md:text-4xl">{biz?.raised}</h2>
                            <p className="text-sm font-normal text-[#909090] md:text-2xl">
                                Raised
                            </p>
                            <progress
                                className="progress -mt-2 h-[0.4rem] max-w-xs text-[#313131]"
                                value="70"
                                max="100"
                            ></progress>
                        </div>

                        <div className="block">
                            <h2 className="text-lg font-bold md:text-4xl">
                                {biz?.investors}
                            </h2>
                            <p className="text-sm font-normal text-[#909090] md:text-2xl">
                                Investors
                            </p>
                        </div>

                        <div className="block">
                            <h2 className="text-lg font-bold md:text-4xl">{biz?.min}</h2>
                            <p className="text-sm font-normal text-[#909090] md:text-2xl">
                                Minimum Investment
                            </p>
                        </div>

                        <div className="block">
                            <h2 className="text-lg font-bold md:text-4xl">120 days</h2>
                            <p className="text-sm font-normal text-[#909090] md:text-2xl">
                                Left to Invest
                            </p>
                        </div>
                    </div>
                </div>
                <button className="btn-accent btn mt-5 w-full max-w-sm px-8 py-2 text-lg font-bold normal-case">
                    Invest Now
                </button>

                <Tabs className="mt-5" defaultValue="about">
                    <Tabs.List position="center">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="terms">Terms</Tabs.Tab>
                        <Tabs.Tab value="documents">Documents</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview">
                        <p></p>
                    </Tabs.Panel>
                    <Tabs.Panel value="about">
                        <p>{biz?.about}</p>
                    </Tabs.Panel>
                    <Tabs.Panel value="terms">
                        <p></p>
                    </Tabs.Panel>
                    <Tabs.Panel value="documents">
                        <p></p>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </>
    );
}

export default Page;
