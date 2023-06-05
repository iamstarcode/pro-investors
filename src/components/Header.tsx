import Image from 'next/image';

function Header() {
  const HeaderBg = () => (
    <Image
      className="m-0 p-0"
      src="/img/header-bg.png"
      width="736"
      height="500"
      alt="header image"
    />
  );

  return (
    <div className="block p-4 lg:mt-8">
      <div className="flex space-x-10 lg:flex-row">
        <div id="left" className="flex flex-col space-y-8 lg:basis-1/2">
          <div className="space-y-3">
            <p className="text-lg font-bold lg:text-4xl">
              Unlock Growth Potential: Connect with Small-Budget Investors to
              Fuel Your Business`&apos;`s Success.
            </p>
            <p className="text-sm lg:text-lg">
              Our website promotes growth potential by connecting small business
              owners with low-cost investors. Promote cooperation and
              investmentopportunities, Build connections and promote success.
            </p>
          </div>
          <div className="lg:hidden lg:basis-1/2">
            <HeaderBg />
          </div>

          <div className="inline-flex w-full space-x-2 lg:max-w-md">
            <input
              type="text"
              placeholder="Type here"
              className="input-secondary input w-full border-white bg-transparent"
            />

            <button className="btn-accent btn px-8 py-2 text-base font-bold normal-case">
              Sign Up
            </button>
          </div>

          <div className="flex justify-between">
            <div className="block">
              <p className="text-2xl font-bold lg:text-4xl">200+</p>
              <p className="text-sm lg:text-xl">Investors</p>
            </div>

            <div className="block">
              <p className="text-2xl font-bold lg:text-4xl">$100M</p>
              <p className="text-sm lg:text-xl">Funds deployed</p>
            </div>
            <div className="block">
              <p className="text-2xl font-bold lg:text-4xl">500+</p>
              <p className="text-sm lg:text-xl">Business owners</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:basis-1/2" id="right">
          {<HeaderBg />}
        </div>
      </div>

      <p className="pt-8 text-center text-xl font-bold lg:pt-16 lg:text-4xl">
        Trusted Advertisment companies
      </p>

      <div className="lg:rows-1 grid grid-cols-2 grid-rows-2 justify-items-center gap-5 pt-12 lg:grid-cols-4 ">
        <Image
          className=""
          src="/img/google.png"
          width="136"
          height="66"
          alt="google icon"
        />
        <Image
          className=""
          src="/img/linkedin.png"
          width="123"
          height="62"
          alt="google icon"
        />

        <Image
          className=""
          src="/img/instagram.png"
          width="136"
          height="63"
          alt="google icon"
        />
        <Image
          className="-ml-4"
          src="/img/reddit.png"
          width="103"
          height="64"
          alt="google icon"
        />
      </div>
    </div>
  );
}

export default Header;
