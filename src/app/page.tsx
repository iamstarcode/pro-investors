import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Footer from '@/partials/footer';
import Image from 'next/image';

function Home() {
  return (
    <>
      <div className="min-h-16 bg-i-secondary">
        <div className="mx-auto w-full max-w-7xl">
          <NavBar />
          <Header />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <p className=" pt-8 text-center text-xl font-bold text-[#282828] lg:text-4xl">
          Our Top Investors
        </p>
        <div className=" mx-auto flex max-w-6xl flex-col space-y-7 p-8 lg:flex-row lg:space-x-10 lg:space-y-0">
          <div className="relative">
            <Image
              src="/img/investor1.png"
              width="804"
              height="898"
              alt="google icon"
            />

            <div className="from-pink-black absolute bottom-0 z-50 flex h-40 w-full bg-gradient-to-t from-black from-20%">
              <div className="flex-end top-auto flex flex-col space-y-4  p-5">
                <p className="flex-1"></p>
                <p className="text-lg font-bold ">Michael John</p>
                <p>Asst, Manager of Amazon</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/img/investor2.png"
              width="804"
              height="898"
              alt="google icon"
            />

            <div className="from-pink-black h-62 absolute bottom-0 z-50 flex w-full bg-gradient-to-t from-black">
              <div className="flex-end top-auto flex flex-col space-y-4  p-5">
                <p className="flex-1"></p>
                <p className="text-lg font-bold ">Michael John</p>
                <p>Asst, Manager of Amazon</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/img/investor3.png"
              width="804"
              height="898"
              alt="google icon"
            />

            <div className="from-pink-black absolute bottom-0 z-50 flex h-40 w-full bg-gradient-to-t from-black">
              <div className="flex-end top-auto flex flex-col space-y-4  p-5">
                <p className="flex-1"></p>
                <p className="text-lg font-bold ">Michael John</p>
                <p>Asst, Manager of Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us  */}
      <div className="bg-i-secondary-500 pb-12 lg:pb-24 xl:pb-32">
        <div className="mx-auto w-full max-w-7xl p-4">
          <p className=" py-8 text-center text-xl font-bold lg:text-4xl">
            Why Choose Us
          </p>

          <div className="">
            <div className="flex w-full flex-col lg:relative">
              <div className="flex w-full flex-col lg:relative lg:max-w-2xl xl:max-w-[715px]">
                <p className="bg-i-secondary-700 p-8 text-sm lg:py-28 lg:pr-52 xl:py-24 xl:pr-32 xl:text-lg">
                  At Proinvestors, we understand that small businesses are the
                  foundation of our economy and have tremendous potential. We
                  know that many bright businesspeople find it difficult to
                  obtain the finance they need to expand their operations and
                  realize their aspirations. Many investors are searching for
                  interesting investment opportunities that have the potential
                  to produce high returns and boost the local economy. Our
                  website links these two worlds by providing a safe and
                  convenient setting for connecting and working with investors
                  and business owners.
                </p>
              </div>
              <div className="relative lg:absolute lg:right-0 lg:top-32 xl:right-0 xl:top-24">
                <div className="absolute inset-0 flex w-full items-center justify-center">
                  <Image
                    src="/img/play.png"
                    width="60"
                    height="60"
                    alt="why us"
                  />
                </div>
                <Image
                  className="w-full lg:w-[490px] xl:w-[611px]"
                  src="/img/why1.png"
                  width="611"
                  height="400"
                  alt="why us"
                />
              </div>
            </div>

            <div className="mt-8 flex w-full flex-col lg:relative lg:mt-32">
              <div className="flex w-full flex-col lg:relative lg:max-w-2xl">
                <p className="bg-i-secondary-700 p-6 text-sm lg:py-28 lg:pr-52 xl:py-24 xl:pr-32 xl:text-lg">
                  We provide business owners with a special opportunity to
                  highlight their endeavors and draw investment. Our website
                  offers a thorough profilefor every business, enabling
                  entrepreneurs to outline their goals, strategies for
                  expansion, and financial projections to possible backers.
                  Business owners can obtain the capital required to increase
                  operations, create new products, or enter new markets by
                  gaining access to our network of investors.
                </p>
              </div>
              <div className="relative lg:absolute lg:right-0 lg:top-32 xl:right-0 xl:top-24">
                <div className="absolute inset-0 flex w-full items-center justify-center">
                  <Image
                    src="/img/play.png"
                    width="60"
                    height="60"
                    alt="why us"
                  />
                </div>
                <Image
                  className="w-full lg:w-[490px] xl:w-[611px]"
                  src="/img/why2.png"
                  width="611"
                  height="400"
                  alt="why us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl p-4">
        {/* Insight */}
        <div className="mt-8 flex space-x-4 lg:mx-auto lg:max-w-3xl lg:space-x-16">
          <div className="basis-1/2">
            <Image
              src="/img/pictogram.png"
              width="400"
              height="400"
              alt="pictogram icon"
            />
          </div>

          <div className="basis-1/2">
            <p className="text-lg font-medium text-[#282828] lg:text-4xl">
              Insights of our website
            </p>
            <p className="text-sm font-normal text-[#909090] lg:text-base">
              Proinvestors is an innovative investment website that provides a
              unique opportunity for investors to connect with and invest in
              small business owners&apos; ventures.
            </p>
          </div>
        </div>
        {/* Summary */}
        <div>
          <p className="py-5 text-xl font-medium text-[#282828] lg:text-4xl">
            Summary
          </p>
          <Image
            className="max-w-xs lg:max-w-md"
            src="/img/piechart.png"
            width="799"
            height="402"
            alt="pictogram icon"
          />
        </div>

        {/* Testimonials */}
        <div className="">
          <p className="mt-8 text-center text-base font-medium text-[#282828]">
            Testimonials
          </p>
          <p className="text-center font-bold text-[#282828]">
            What our Happy Users are saying
          </p>

          <div className="flex flex-col space-y-14 md:space-y-0 p-8 md:flex-row md:space-x-4">
            <div className="relative rounded-br-[3rem] bg-i-secondary-700 p-4">
              <div className="absolute top-[-1.70rem] h-12 w-12 rounded-full  bg-i-secondary-400"></div>
              <div className="mt-5 inline-flex space-x-2">
                {[1, 1, 1, 1, 1].map((item, i) => (
                  <Image
                    key={i}
                    src="/img/yellowrating.png"
                    width="28"
                    height="28"
                    alt="yellow rating"
                  />
                ))}
              </div>
              <p className="mt-2 text-xs">
                I&apos;ve been using this investment website for six months now
                and i have had some great opportunities to invest in small
                businesses. the platform is easy to use and provides all the
                information i need to make informed decisions
              </p>

              <div className="mt-4 inline-flex items-center space-x-2">
                <Image
                  src="/img/avatar1.png"
                  width="40"
                  height="40"
                  alt="yellow rating"
                />
                <div className="block">
                  <p className="text-sm font-semibold">Richard james</p>
                  <p className="text-xs font-medium">CEO of Techub</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-br-[3rem] bg-i-secondary-700 p-4">
              <div className="absolute top-[-1.70rem] h-12 w-12 rounded-full  bg-i-secondary-400"></div>
              <div className="mt-5 inline-flex space-x-2">
                {[1, 1, 1, 1].map((item, i) => (
                  <Image
                    key={i}
                    src="/img/yellowrating.png"
                    width="28"
                    height="28"
                    alt="yellow rating"
                  />
                ))}
                <Image
                  src="/img/whiterating.png"
                  width="28"
                  height="28"
                  alt="yellow rating"
                />
              </div>
              <p className="mt-2 text-xs">
                I was hesitant to use an investment website at first but the
                support team was incredibly helpful and walked me through the
                process. I ended upInvesting in a small bakeryand have been
                thrilled to watch them grow and Expand offerings.
              </p>

              <div className="mt-4 inline-flex items-center space-x-2">
                <Image
                  src="/img/avatar2.png"
                  width="40"
                  height="40"
                  alt="yellow rating"
                />
                <div className="block">
                  <p className="text-sm font-semibold">Mary John</p>
                  <p className="text-xs font-medium">CEO of Passionate wears</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-br-[3rem] bg-i-secondary-700 p-4">
              <div className="absolute top-[-1.70rem] h-12 w-12 rounded-full  bg-i-secondary-400"></div>
              <div className="mt-5 inline-flex space-x-2">
                <div className="inline-flex space-x-2">
                  {[1, 1, 1, 1].map((item, i) => (
                    <Image
                      key={i}
                      src="/img/yellowrating.png"
                      width="28"
                      height="28"
                      alt="yellow rating"
                    />
                  ))}
                  <Image
                    src="/img/whiterating.png"
                    width="28"
                    height="28"
                    alt="yellow rating"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs">
                This investment website is a great way to support businesses and
                also earn Reasonsible return on investment. I’ve invested in a
                few different companies Have been impressed with the level of
                communication and transparency Throughout the process.
              </p>

              <div className="mt-4 inline-flex items-center space-x-2">
                <Image
                  src="/img/avatar3.png"
                  width="40"
                  height="40"
                  alt="yellow rating"
                />
                <div className="block">
                  <p className="text-sm font-semibold">Bruce Wayne</p>
                  <p className="text-xs font-medium">CEO of Vpad Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How To Invest */}
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-center font-bold text-[#282828]">How To Invest</p>
          <div className="mt-5 grid h-[300px] grid-cols-2 grid-rows-2 justify-items-center gap-4 lg:h-56 lg:grid-cols-4 lg:grid-rows-1">
            <div className="relative h-full w-full bg-i-secondary-700">
              <div className="absoluten left-0 top-0 m-2 flex h-12 w-12 items-center justify-center rounded-full bg-i-secondary-400 text-lg font-bold">
                <p>1</p>
              </div>
            </div>

            <div className="relative h-full w-full bg-i-secondary-700">
              <div className="absoluten left-0 top-0 m-2 flex h-12 w-12 items-center justify-center rounded-full bg-i-secondary-400 text-lg font-bold">
                <p>2</p>
              </div>
            </div>

            <div className="relative h-full w-full bg-i-secondary-700">
              <div className="absoluten left-0 top-0 m-2 flex h-12 w-12 items-center justify-center rounded-full bg-i-secondary-400 text-lg font-bold">
                <p>3</p>
              </div>
            </div>

            <div className="relative h-full w-full bg-i-secondary-700">
              <div className="absoluten left-0 top-0 m-2 flex h-12 w-12 items-center justify-center rounded-full bg-i-secondary-400 text-lg font-bold">
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Get Started */}
      <div className="relative mx-auto mt-5 w-full">
        <div className="hidden md:block">
          <Image
            src="/img/getstartedlg.png"
            width="1440"
            height="456"
            alt="get started"
          />
        </div>

        <div className="md:hidden">
          <Image
            src="/img/getstartedsm.png"
            width="428"
            height="300"
            alt="get started"
          />
        </div>

        <div className="absolute bottom-5 left-0 right-0">
          <div className="flex w-full items-center justify-center">
            <button className="btn-accent btn rounded-full px-8 py-2 font-bold normal-case">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* News Letter */}
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

export default Home;
