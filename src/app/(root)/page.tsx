import Image from 'next/image';

function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center text-xl font-bold text-[#282828] lg:text-4xl">
          Our Top Investors
        </p>
        <div className="mt-8 flex flex-col space-y-7 p-4 lg:flex-row lg:space-x-10">
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
      <div className="bg-i-secondary-500 pb-12 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl p-4">
          <p className=" py-8 text-center text-xl font-bold lg:text-4xl">
            Why Choose Us
          </p>

          <div className="">
            <div className="flex w-full flex-col lg:relative">
              <div className="flex basis-4/5 flex-col lg:relative lg:max-w-3xl">
                <p className="bg-i-secondary-700 p-6 text-sm lg:py-36 lg:pr-52 xl:py-36 xl:pr-64 xl:text-lg">
                  Tempor id eu nisl nunc mi. Sit consectetur adipiscing elit
                  duis tristique. Ut tristique et egestas quis ipsum suspendisse
                  ultrices gravida. Ac feugiat sed lectus vestibulum. Ornare
                  quam viverra orci sagittis eu volutpat odio. Sed viverra
                  tellus in hac habitasse platea dictumst rhoncus. Habitant
                  morbi tristique senectus et netus et malesuada fames.
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
                  className="w-full lg:w-[430px] xl:w-[611px]"
                  src="/img/why1.png"
                  width="611"
                  height="400"
                  alt="why us"
                />
              </div>
            </div>

            <div className="mt-8 flex w-full flex-col lg:relative lg:mt-32">
              <div className="flex basis-4/5 flex-col lg:relative lg:max-w-3xl">
                <p className="bg-i-secondary-700 p-6 text-sm lg:py-36 lg:pr-52 xl:py-36 xl:pr-64 xl:text-lg">
                  Tempor id eu nisl nunc mi. Sit amet consectetur adipiscing
                  elit duis tristique. Ut tristique et egestas quis ipsum
                  suspendisse ultrices gravida. Ac feugiat sed lectus
                  vestibulum. Ornare quam viverra orci sagittis eu volutpat
                  odio. Sed viverra tellus in hac habitasse platea dictumst
                  vestibulum rhoncus. Habitant morbi tristique senectus et netus
                  et malesuada fames. Amet venenatis urna cursus eget nunc.
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
                  className="w-full lg:w-[430px] xl:w-[611px]"
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
              Tempor id eu nisl nunc mi. Sit amet adipiscing elit duis
              tristique. Ut tristique etegestas quis ipsum suspendisse ultrices
              gravida. Ac feugiat sed lectus vestibulum..
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
        <div className="py-8">
          <p className="mt-8 text-center text-base font-medium text-[#282828]">
            Testimonials
          </p>
          <p className="text-center font-bold text-[#282828]">
            What our Happy Users are saying
          </p>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="relative mt-10 rounded-br-[3rem] bg-i-secondary-700 p-4">
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
                Tempor id eu nisl nunc mi. Sit amet adipiscingelit duis
                tristique. Ut tristique etegestas quisipsum suspendisse ultrices
                gravida. Ac feugiatsed lectus vestibulum..
              </p>

              <div className="mt-4 inline-flex items-center space-x-2">
                <Image
                  src="/img/avatar1.png"
                  width="40"
                  height="40"
                  alt="yellow rating"
                />
                <div className="block">
                  <p className="text-sm font-medium">Daniel james</p>
                  <p className="text-xs font-medium">CEO of Techub</p>
                </div>
              </div>
            </div>

            <div className="relative mt-10 rounded-br-[3rem] bg-i-secondary-700 p-4">
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
                Tempor id eu nisl nunc mi. Sit amet adipiscingelit duis
                tristique. Ut tristique etegestas quisipsum suspendisse ultrices
                gravida. Ac feugiatsed lectus vestibulum..
              </p>

              <div className="mt-4 inline-flex items-center space-x-2">
                <Image
                  src="/img/avatar2.png"
                  width="40"
                  height="40"
                  alt="yellow rating"
                />
                <div className="block">
                  <p className="text-sm font-medium">Lois Kent</p>
                  <p className="text-xs font-medium">CEO of Daily News</p>
                </div>
              </div>
            </div>
            <div className="relative mt-10 rounded-br-[3rem] bg-i-secondary-700 p-4">
              <div className="absolute top-[-1.70rem] h-12 w-12 rounded-full  bg-i-secondary-400"></div>
              <div className="mt-5 inline-flex space-x-2">
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
              </div>
              <p className="mt-2 text-xs">
                Tempor id eu nisl nunc mi. Sit amet adipiscingelit duis
                tristique. Ut tristique etegestas quisipsum suspendisse ultrices
                gravida. Ac feugiatsed lectus vestibulum..
              </p>

              <div className="mt-4 inline-flex items-center space-x-2">
                <Image
                  src="/img/avatar3.png"
                  width="40"
                  height="40"
                  alt="yellow rating"
                />
                <div className="block">
                  <p className="text-sm font-medium">Bruce Wayne</p>
                  <p className="text-xs font-medium">CEO of iTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How To Invest */}
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-center font-bold text-[#282828]">
            What our Happy Users are saying
          </p>
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
      <div className="mx-auto mt-8 w-full max-w-6xl p-4 xl:p-0">
        <p className="text-center font-bold text-[#282828] ">Our Newsletter</p>
        <div className=" mt-2 bg-i-secondary-700 p-6 md:p-20 ">
          <div className="flex flex-col space-y-4 lg:flex-row">
            <div className="md:px-14 lg:basis-4/6">
              <p className="text-xl font-bold md:text-4xl">
                Stay Updated with our weekly Newsletter
              </p>
              <p className="mt-2 text-xs">
                Tempor id eu nisl nunc mi. Sit amet consectetur adipiscing elit
                duis tristique. Ut tristique et egestas quis ipsum suspendisse
                ultrices gravida. Ac feugiat sed lectus vestibulum.{' '}
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-8 lg:basis-2/6 lg:pt-0">
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
    </>
  );
}

export default Home;
