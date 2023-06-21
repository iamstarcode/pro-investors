import Image from 'next/image';
import NavBar from '@/components/NavBar';

function AboutUs() {
    return (
        <>
            <div className="min-h-16 bg-i-secondary">
                <div className="mx-auto w-full max-w-7xl">
                    <NavBar />
                </div>
            </div>
            <div className="about relative mx-auto mt-20 w-full ">
                <div className="hidden md:block">
                    <Image
                        src="/img/about.png"
                        width="1440"
                        height="456"
                        alt="get started"
                    />
                </div>
                <div className="md:hidden">
                    <Image
                        src="/img/about.png"
                        width="428"
                        height="300"
                        alt="get started"
                    />
                </div>

                <div className="from-pink-black from-2% absolute bottom-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-b from-black">
                    <p className="text-base font-bold">About Us</p>
                </div>
            </div>

            <div className="mx-auto mt-8 w-full max-w-7xl p-4 text-[#323232]">
                <div className="flex flex-wrap">
                    <div className=" md:basis-1/2">
                        <h2 className="text-base lg:text-4xl font-bold">Our Values</h2>
                        <p className='pt-2 text-[#717171]'>
                            Proinvestors offers a wide range of carefully vetted investment
                            opportunities in various industries and sectors. Whether you are a
                            seasoned investor looking to diversify your portfolio or a
                            passionate individual seeking to support emerging businesses, our
                            platform provides access to a curated selection of promising
                            ventures.We assess factors such as market potential, financial
                            stability, and growth prospects, ensuring that only the most
                            promising opportunities are presented to our investors.
                        </p>
                    </div>
                    <div className=" md:basis-1/2"></div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
