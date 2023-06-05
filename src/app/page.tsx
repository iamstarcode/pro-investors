import Image from 'next/image';

function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center text-xl font-bold text-[#282828] lg:text-4xl">
          Our Top Investors
        </p>
        <div className="mt-8 flex flex-col space-y-7 p-6 lg:flex-row lg:space-x-10">
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
            <div className="flex flex-col w-full lg:relative">
              <div className="flex basis-4/5 flex-col lg:relative lg:max-w-3xl">
                <p className="bg-i-secondary-700 p-6 lg:py-36 lg:pr-52 xl:py-36 xl:pr-64 text-sm xl:text-lg">
                  Tempor id eu nisl nunc mi. Sit consectetur adipiscing elit
                  duis tristique. Ut tristique et egestas quis ipsum suspendisse
                  ultrices gravida. Ac feugiat sed lectus vestibulum. Ornare
                  quam viverra orci sagittis eu volutpat odio. Sed viverra
                  tellus in hac habitasse platea dictumst rhoncus. Habitant
                  morbi tristique senectus et netus et malesuada fames.
                </p>
              </div>
              <div className="relative lg:absolute lg:right-0 lg:top-32 xl:right-0 xl:top-24">
                <div className="absolute inset-0 flex w-full justify-center items-center">
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

            <div className="flex flex-col w-full lg:relative mt-8 lg:mt-32">
              <div className="flex basis-4/5 flex-col lg:relative lg:max-w-3xl">
                <p className="bg-i-secondary-700 p-6 lg:py-36 lg:pr-52 xl:py-36 xl:pr-64 text-sm xl:text-lg">
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
                <div className="absolute inset-0 flex w-full justify-center items-center">
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
        <div className="flex lg:space-x-16 space-x-4 mt-8 lg:mx-auto lg:max-w-3xl">
          <div className="basis-1/2">
            <Image
              src="/img/pictogram.png"
              width="400"
              height="400"
              alt="pictogram icon"
            />
          </div>

          <div className="basis-1/2">
            <p className="text-lg lg:text-4xl font-medium text-[#282828]">
              Insights of our website
            </p>
            <p className="text-sm lg:text-base font-normal text-[#909090]">
              Tempor id eu nisl nunc mi. Sit amet adipiscing elit duis
              tristique. Ut tristique etegestas quis ipsum suspendisse ultrices
              gravida. Ac feugiat sed lectus vestibulum..
            </p>
          </div>
        </div>
        {/* Summary */}
        <div>
          <p className="text-xl lg:text-4xl font-medium text-[#282828] py-5">
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
        <div className="p-8">
          <p className="text-base font-medium text-center mt-8 text-[#282828]">
            Testimonials
          </p>
          <p className="text-[#282828] text-center font-bold">
            What our Happy Users are saying
          </p>

          <div className="flex flex-col md:flex-row md:space-x-4 md:px-4">
            <div className="p-4 bg-i-secondary-700 relative mt-10 rounded-br-[3rem]">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absolute  top-[-1.70rem]"></div>
              <div className="inline-flex space-x-2 mt-5">
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
              <p className="text-xs mt-2">
                Tempor id eu nisl nunc mi. Sit amet adipiscingelit duis
                tristique. Ut tristique etegestas quisipsum suspendisse ultrices
                gravida. Ac feugiatsed lectus vestibulum..
              </p>

              <div className="inline-flex space-x-2 items-center mt-4">
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

            <div className="p-4 bg-i-secondary-700 relative mt-10 rounded-br-[3rem]">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absolute  top-[-1.70rem]"></div>
              <div className="inline-flex space-x-2 mt-5">
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
              <p className="text-xs mt-2">
                Tempor id eu nisl nunc mi. Sit amet adipiscingelit duis
                tristique. Ut tristique etegestas quisipsum suspendisse ultrices
                gravida. Ac feugiatsed lectus vestibulum..
              </p>

              <div className="inline-flex space-x-2 items-center mt-4">
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
            <div className="p-4 bg-i-secondary-700 relative mt-10 rounded-br-[3rem]">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absolute  top-[-1.70rem]"></div>
              <div className="inline-flex space-x-2 mt-5">
                <div className="inline-flex space-x-2 mt-5">
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
              <p className="text-xs mt-2">
                Tempor id eu nisl nunc mi. Sit amet adipiscingelit duis
                tristique. Ut tristique etegestas quisipsum suspendisse ultrices
                gravida. Ac feugiatsed lectus vestibulum..
              </p>

              <div className="inline-flex space-x-2 items-center mt-4">
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
        <div className="mx-auto w-full max-w-7xl p-4">
          <p className="text-[#282828] text-center font-bold">
            What our Happy Users are saying
          </p>
          <div className="grid gap-3 justify-items-center grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 mt-5">
            <div className="h-44 w-44  lg:w-52 lg:h-52 bg-i-secondary-700 relative">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absoluten left-0 top-0 m-2 flex justify-center items-center text-lg font-bold">
                <p>1</p>
              </div>
            </div>

            <div className="h-44 w-44 lg:w-52 lg:h-52 bg-i-secondary-700 relative">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absoluten left-0 top-0 m-2 flex justify-center items-center text-lg font-bold">
                <p>2</p>
              </div>
            </div>

            <div className="h-44 w-44 lg:w-52 lg:h-52 bg-i-secondary-700 relative">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absoluten left-0 top-0 m-2 flex justify-center items-center text-lg font-bold">
                <p>3</p>
              </div>
            </div>

            <div className="h-44 w-44 lg:w-52 lg:h-52 bg-i-secondary-700 relative">
              <div className="w-12 h-12 rounded-full bg-i-secondary-400 absoluten left-0 top-0 m-2 flex justify-center items-center text-lg font-bold">
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Get Started */}
      <div className='w-full flex relative mt-5'>
        <div className='hidden md:block'>
          <Image
            src="/img/getstartedlg.png"
            width="1440"
            height="456"
            alt="get started"
          />
        </div>

        <div className='md:hidden'
        >
          <Image
            src="/img/getstartedsm.png"
            width="428"
            height="300"
            alt="get started"
          />
        </div>

        <div className='absolute bottom-5 left-0 right-0'>
          <div className='w-full flex justify-center items-center'>
            <button className="btn-accent btn rounded-full px-8 py-2 font-bold normal-case">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* News Letter */}
      <div className="mx-auto w-full max-w-6xl p-4 mt-8">
        <p className="text-[#282828] text-center font-bold ">
          Our Newsletter
        </p>
        <div className=' bg-i-secondary-700 p-6 md:p-20 mt-2 '>
          <div className='flex flex-col lg:flex-row space-y-4'>
            <div className='md:px-14 lg:basis-4/6'>
              <p className='text-xl md:text-4xl font-bold'>Stay Updated with our weekly Newsletter</p>
              <p className='text-xs mt-2'>Tempor id eu nisl nunc mi. Sit amet consectetur adipiscing elit duis tristique. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ac feugiat sed lectus vestibulum. </p>
            </div>

            <div className='flex flex-col space-y-4 mt-4 lg:basis-2/6'>
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

      <div className='w-full flex relative mt-5 bg-i-secondary-900'>
        <div className="mx-auto w-full max-w-6xl p-4 mt-8">

          <div className='grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4 lg:rows-1 justify-items-center'>
            <div className='flex flex-col space-y-2 max-w-[195px]'>
              <div className="inline-flex  items-center font-medium">
                <Image
                  src="/logosm.png"
                  width="32"
                  height="32"
                  alt="logo"
                />
                <p >
                  <span className="text-accent">Pro</span>
                  <span>Investors</span>
                </p>

              </div>
              <p className='text-xs '>Promote cooperation and investment opportunities, Build connections andpromote success.</p>
              <div className='inline-flex space-x-4 mt-4'>
                <Image
                  src="/img/ig.png"
                  width="32"
                  height="32"
                  alt="ig logo"
                />

                <Image
                  src="/img/youtube.png"
                  width="44"
                  height="27"
                  alt="youtube logo"
                />

                <Image
                  src="/img/fb.png"
                  width="18"
                  height="36"
                  alt="facebook logo"
                />
              </div>
            </div>

            <div className='block space-y-2'>
              <p className='font-bold text-2xl text-[#717171]'>For Investors</p>
              <p className='text-lg'>Why Invest</p>
              <p className='text-lg'>How It Works</p>
              <p className='text-lg'>Risk</p>
              <p className='text-lg'>FAQ</p>
            </div>

            <div className='block space-y-2'>
              <p className='font-bold text-2xl text-[#717171]'>For Business Owners</p>
              <p className='text-lg'>Why Raise</p>
              <p className='text-lg'>Learn</p>
              <p className='text-lg'>FAQ</p>
            </div>

            <div className='block space-y-2'>
              <p className='font-bold text-2xl text-[#717171]'>About Us</p>
              <p className='text-lg'>Privacy Policy</p>
              <p className='text-lg'>Help And Support</p>
              <p className='text-lg'>Terms And Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
