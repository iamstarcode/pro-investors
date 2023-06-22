import Image from 'next/image';
function Page() {
    return (
        <>
            <div className="mt-5 px-4 py-4">
                <p className="text-lg font-bold lg:text-4xl">Businesses</p>
                <div className="flex space-x-4">
                    <div className="w-full md:basis-3/5">
                        <Image
                            className="hidden h-full md:block"
                            src="/img/stat/blissful.png"
                            width="1432"
                            height="680"
                            alt="blissfull stat"
                        />
                        <Image
                            className="block h-full md:hidden"
                            src="/img/stat/blissfull-sm.png"
                            width="750"
                            height="514"
                            alt="blissfull stat"
                        />
                    </div>
                    <div className="hidden md:block md:basis-2/5">
                        <Image
                            className="hidden h-full md:block"
                            src="/img/stat/blissful-bar.png"
                            width="754"
                            height="680"
                            alt="blissfull stat"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
