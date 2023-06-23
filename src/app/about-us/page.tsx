import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/partials/footer';

function AboutUs() {
    const teams = [
        {
            name: 'Micheal West',
            title: 'Co-found and CEO',
            imgSrc: '/img/team1.png',
        },

        {
            name: 'Sophia wilson',
            title: 'UI/UX Expert',
            imgSrc: '/img/team2.png',
        },

        {
            name: 'Robert Daniel',
            title: 'Backend Lead',
            imgSrc: '/img/team3.png',
        },
        {
            name: 'Jessica Lana',
            title: 'VP of costumer success',
            imgSrc: '/img/team4.png',
        },
        {
            name: 'Emily jackson',
            title: 'Product Manager',
            imgSrc: '/img/team5.png',
        },
        {
            name: 'Robert Daniel',
            title: 'Backend Lead',
            imgSrc: '/img/team6.png',
        },
    ];

    const Card = ({
        name,
        title,
        imgSrc,
    }: {
        name: string;
        title: string;
        imgSrc: string;
    }) => {
        return (
            <div className="card card-compact w-full flex-shrink-0 bg-i-secondary">
                <figure className="p-4">
                    <Image src={imgSrc} width={365} height={220} alt="team image" />
                </figure>
                <div className="p-2 text-white">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-bold">{name}</h2>
                            <p className="mt-2 text-sm font-normal md:text-lg ">{title}</p>
                        </div>
                    </div>
                </div>
                <div className="my-3 inline-flex justify-between p-2">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20ZM19.401 16.2562L19.443 16.9483L18.7435 16.8636C16.1974 16.5387 13.973 15.4371 12.0844 13.5869L11.1611 12.6689L10.9233 13.3468C10.4197 14.858 10.7414 16.454 11.7907 17.5274C12.3502 18.1205 12.2243 18.2053 11.2591 17.8522C10.9233 17.7392 10.6295 17.6545 10.6016 17.6968C10.5036 17.7957 10.8394 19.0809 11.1052 19.5894C11.4689 20.2955 12.2104 20.9876 13.0218 21.3972L13.7072 21.722L12.8958 21.7361C12.1124 21.7361 12.0844 21.7502 12.1684 22.0468C12.4482 22.9648 13.5534 23.9394 14.7844 24.3631L15.6518 24.6597L14.8964 25.1116C13.7772 25.7613 12.4622 26.1285 11.1471 26.1567C10.5176 26.1709 10 26.2273 10 26.2697C10 26.411 11.7067 27.2019 12.7 27.5126C15.6798 28.4306 19.2191 28.0351 21.8772 26.4674C23.7658 25.3517 25.6543 23.1343 26.5357 20.9876C27.0113 19.8436 27.487 17.7533 27.487 16.7506C27.487 16.1009 27.529 16.0162 28.3124 15.2394C28.774 14.7874 29.2077 14.2931 29.2916 14.1519C29.4315 13.8835 29.4175 13.8835 28.7041 14.1236C27.515 14.5473 27.3471 14.4908 27.9346 13.8553C28.3683 13.4033 28.8859 12.5842 28.8859 12.3441C28.8859 12.3017 28.6761 12.3723 28.4383 12.4994C28.1865 12.6407 27.6269 12.8525 27.2072 12.9796L26.4518 13.2197L25.7663 12.7537C25.3885 12.4994 24.8569 12.217 24.5771 12.1322C23.8637 11.9345 22.7725 11.9627 22.129 12.1887C20.3803 12.8243 19.2751 14.4626 19.401 16.2562Z"
                            fill="white"
                        />
                    </svg>

                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.65577 0C2.97989 0 0 2.98477 0 6.66667V33.3333C0 37.0152 2.97989 40 6.65578 40H32.5109C36.1868 40 39.1667 37.0152 39.1667 33.3333V6.66667C39.1667 2.98477 36.1868 0 32.5109 0H6.65577ZM5.37537 8.948C5.37537 10.9592 6.89769 12.4289 8.77554 12.4289C10.6537 12.4289 12.176 10.9592 12.176 8.948C12.176 6.93711 10.6537 5.4657 8.77554 5.4657C6.89769 5.4657 5.37537 6.93711 5.37537 8.948ZM27.5698 34.3771H33.4676V22.4627C33.4676 16.5784 29.9113 14.5715 26.6204 14.5715C23.5774 14.5715 21.5102 16.5961 20.9395 17.7821V15.1129H15.2675V34.3771H21.1653V23.9327C21.1653 21.1478 22.8808 19.7935 24.6309 19.7935C26.2861 19.7935 27.5698 20.7509 27.5698 23.8554V34.3771ZM11.7243 15.0981V34.3622H5.82678V15.0981H11.7243Z"
                            fill="white"
                        />
                    </svg>

                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.0015 0C14.5697 0 13.8881 0.0237504 11.7547 0.120834C9.62552 0.218334 8.17217 0.555417 6.90049 1.05C5.58506 1.56083 4.46921 2.24417 3.35754 3.35625C2.24502 4.46792 1.56168 5.58375 1.04918 6.89875C0.553339 8.17083 0.215836 9.62458 0.120001 11.7529C0.0250003 13.8863 0 14.5683 0 20C0 25.4317 0.0241673 26.1112 0.120835 28.2446C0.218753 30.3738 0.555839 31.8271 1.05001 33.0988C1.56127 34.4142 2.24461 35.53 3.3567 36.6417C4.46796 37.7542 5.58381 38.4392 6.89841 38.95C8.17092 39.4446 9.62469 39.7817 11.7535 39.8792C13.8868 39.9762 14.5681 40 19.9994 40C25.4315 40 26.1111 39.9762 28.2445 39.8792C30.3737 39.7817 31.8287 39.4446 33.1012 38.95C34.4162 38.4392 35.5304 37.7542 36.6416 36.6417C37.7541 35.53 38.4375 34.4142 38.95 33.0992C39.4417 31.8271 39.7792 30.3733 39.8792 28.245C39.975 26.1117 40 25.4317 40 20C40 14.5683 39.975 13.8867 39.8792 11.7533C39.7792 9.62417 39.4417 8.17083 38.95 6.89917C38.4375 5.58375 37.7541 4.46792 36.6416 3.35625C35.5291 2.24375 34.4166 1.56042 33.0999 1.05C31.8249 0.555417 30.3707 0.218334 28.2415 0.120834C26.1082 0.0237504 25.429 0 19.9956 0H20.0015ZM18.2073 3.60417C18.7398 3.60333 19.334 3.60417 20.0015 3.60417C25.3415 3.60417 25.9744 3.62333 28.0832 3.71917C30.0332 3.80833 31.0916 4.13417 31.7966 4.40792C32.7299 4.77042 33.3953 5.20375 34.0949 5.90375C34.7949 6.60375 35.2283 7.27042 35.5916 8.20375C35.8654 8.90792 36.1916 9.96625 36.2804 11.9162C36.3762 14.0246 36.397 14.6579 36.397 19.9954C36.397 25.3329 36.3762 25.9663 36.2804 28.0746C36.1912 30.0246 35.8654 31.0829 35.5916 31.7871C35.2291 32.7204 34.7949 33.385 34.0949 34.0846C33.3949 34.7846 32.7303 35.2179 31.7966 35.5804C31.0924 35.8554 30.0332 36.1804 28.0832 36.2696C25.9749 36.3654 25.3415 36.3862 20.0015 36.3862C14.661 36.3862 14.0281 36.3654 11.9197 36.2696C9.96969 36.1796 8.91134 35.8537 8.20592 35.58C7.27258 35.2175 6.6059 34.7842 5.9059 34.0842C5.20589 33.3842 4.77255 32.7192 4.40921 31.7854C4.13546 31.0813 3.80921 30.0229 3.72046 28.0729C3.62462 25.9646 3.60545 25.3313 3.60545 19.9904C3.60545 14.6496 3.62462 14.0196 3.72046 11.9113C3.80962 9.96125 4.13546 8.90292 4.40921 8.19792C4.77172 7.26458 5.20589 6.59792 5.9059 5.89792C6.6059 5.19792 7.27258 4.76458 8.20592 4.40125C8.91093 4.12625 9.96969 3.80125 11.9197 3.71167C13.7647 3.62833 14.4797 3.60333 18.2073 3.59917V3.60417Z"
                            fill="white"
                        />
                        <path
                            d="M30.6344 6.87587C30.1597 6.87587 29.6956 7.01665 29.3009 7.2804C28.9062 7.54415 28.5986 7.91903 28.417 8.35762C28.2354 8.79621 28.1879 9.27882 28.2805 9.74439C28.3732 10.21 28.6019 10.6376 28.9376 10.9732C29.2733 11.3088 29.7011 11.5373 30.1667 11.6299C30.6323 11.7224 31.1149 11.6747 31.5534 11.4929C31.992 11.3112 32.3667 11.0034 32.6303 10.6086C32.894 10.2138 33.0346 9.74975 33.0344 9.27504C33.0344 7.95004 31.9594 6.87587 30.6344 6.87587Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.9584 9.68004C14.2863 9.68004 9.68751 14.2788 9.68751 19.9509C9.68751 25.623 14.2863 30.2196 19.9584 30.2196C25.6306 30.2196 30.2281 25.623 30.2281 19.9509C30.2281 14.2788 25.6306 9.68004 19.9584 9.68004ZM20 26.5625C23.6244 26.5625 26.5625 23.6244 26.5625 20C26.5625 16.3757 23.6244 13.4375 20 13.4375C16.3756 13.4375 13.4375 16.3757 13.4375 20C13.4375 23.6244 16.3756 26.5625 20 26.5625Z"
                            fill="white"
                        />
                    </svg>

                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20ZM22.0846 31.7596V20.8785H25.0883L25.4863 17.1288H22.0846L22.0897 15.2521C22.0897 14.2741 22.1827 13.7501 23.5873 13.7501H25.4651V10H22.461C18.8526 10 17.5826 11.819 17.5826 14.878V17.1293H15.3333V20.8789H17.5826V31.7596H22.0846Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="min-h-16 bg-i-secondary">
                <div className="mx-auto w-full max-w-7xl">
                    <NavBar />
                </div>
            </div>
            <div className="relative mx-auto mt-20 w-full max-w-max  ">
                <div className="hidden md:block">
                    <Image
                        src="/img/about.png"
                        width="1440"
                        height="319"
                        alt="get started"
                    />
                </div>
                <div className="md:hidden">
                    <Image
                        src="/img/about.png"
                        width="428"
                        height="400"
                        alt="get started"
                    />
                </div>

                <div className="from-pink-black from-2% absolute bottom-0 z-40 flex h-full w-full items-center justify-center bg-gradient-to-b from-black">
                    <p className="text-base font-bold md:text-4xl">About Us</p>
                </div>
            </div>

            <div className="mx-auto mt-8 w-full max-w-7xl p-4 text-[#323232] md:mt-24">
                <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-16 md:space-y-0">
                    <div className="md:basis-1/2">
                        <h2 className="text-lg font-bold lg:text-4xl">Our Values</h2>
                        <p className="pt-2 text-sm text-[#717171] md:text-2xl">
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
                    <div className="md:basis-1/2">
                        <Image
                            src="/img/forex.png"
                            width="768"
                            height="512"
                            alt="get started"
                        />
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-center md:mt-32">
                    <button className="btn-outline btn rounded-full md:text-2xl">
                        MEET OUR TEAM
                    </button>
                    <h2 className="mt-5 text-center text-base text-[#717171] md:text-xl">
                        Meet our diverse team of world class creators, designers, and
                        problem solvers
                    </h2>

                    <div className="mt-5 grid max-w-7xl grid-cols-1 gap-3 lg:grid-cols-3">
                        {teams.map(({ name, title, imgSrc }, index) => (
                            <Card key={index} name={name} imgSrc={imgSrc} title={title} />
                        ))}
                    </div>

                    <div className="mt-16 md:mt-28 flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-16 md:space-y-0">
                        <div className="md:basis-1/2">
                            <Image
                                src="/img/team1.png"
                                width="768"
                                height="512"
                                alt="get started"
                            />
                        </div>
                        <div className="md:basis-1/2">
                            <p className="pt-2 text-sm text-[#717171] md:text-base">
                                Viatour.ng is an innovative tourism startup that is
                                revolutionizing the way travelers explore and experience the
                                world. We understand that travel is not just about visiting
                                famous landmarks or ticking off destinations on checklist;
                                it&apos;s about creating meaningful connections, immersing
                                yourself in diverse cultures, and embracing unforgettable
                                experiences. With our passion for exploration and commitment to
                                exceptional customer service, we strive to provide travelers
                                with unforgettable journeys tailored to their unique preferences
                                and desires. At Viatour.ng, we believe that every traveler
                                deserves a truly personalized and enriching experience. Our
                                dedicated team of travel experts meticulously curates bespoke
                                itineraries that cater to individual interests, ensuring that
                                each adventure is a one-of-a-kind experience. Whether
                                you&apos;re a thrill-seeker,
                            </p>
                            <div className="mt-5 inline-flex items-center space-x-2">
                                <Image
                                    className='rounded-full'
                                    src="/img/ceo-thumb.png"
                                    width="70"
                                    height="70"
                                    alt="CEO image"
                                />
                                <div className="block">
                                    <p className="text-sm font-medium">Michael West</p>
                                    <p className="text-xs font-medium">
                                        Co-found and CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-8 w-full max-w-7xl px-4 xl:py-12">
                <p className="text-center font-bold text-[#282828] ">Our Newsletter</p>
                <div className=" mt-2 bg-i-secondary-700 p-6 md:p-20 ">
                    <div className="flex flex-col space-y-4 lg:flex-row">
                        <div className="md:px-14 lg:basis-4/6">
                            <p className="mt-8 text-xl font-bold md:text-4xl">
                                Stay Updated with our weekly Newsletter
                            </p>
                            <p className="mt-2 text-xs">
                                Get Exclusive News, Tips, and Opportunities from ProInvestors
                                Insider to Unlock Your Investment Potential with Our Exclusive
                                Newsletter!
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4 pb-4 pt-8 lg:basis-2/6 lg:pt-0">
                            <input
                                type="text"
                                className="input-secondary input w-full border-white text-black"
                            />
                            <button className="btn-accent btn px-8 py-2 text-base font-bold normal-case ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
