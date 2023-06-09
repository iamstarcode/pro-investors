import Image from 'next/image';
import { BusinessCardProps } from '@/components/BusinessCard';
import data from '@/data/business.json';

function Page({ params }: { params: { id: string } }) {
    const business: BusinessCardProps[] = JSON.parse(JSON.stringify(data));
    const biz: BusinessCardProps | undefined = business.find(
        biz => biz.id == params.id,
    );
    //console.log(biz);
    return (
        <>
            <div className="mt-5 px-4 py-4">
                <div>
                    <Image
                        src={biz?.thumb ?? ""}
                        width="100"
                        height="100"
                        alt="google icon"
                    />
                    <div>
                        <h2>{biz?.name}</h2>
                        <p>{biz?.discription}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
