import Image from 'next/image';

function Footer() {
  return (
    <div className="mt-5 flex w-full bg-i-secondary-900 z-50 p-4">
      <div className="mx-auto mt-8 w-full max-w-6xl p-4">
        <div className="lg:rows-1 grid grid-cols-2 grid-rows-2 justify-items-start gap-4 lg:grid-cols-4 lg:grid-rows-1">
          <div className="flex max-w-[195px] flex-col space-y-2">
            <div className="inline-flex  items-center font-medium">
              <Image src="/logosm.png" width="32" height="32" alt="logo" />
              <p>
                <span className="text-accent">Pro</span>
                <span>Investors</span>
              </p>
            </div>
            <p className="text-xs ">
              Promote cooperation and investment opportunities, Build
              connections andpromote success.
            </p>
            <div className="mt-4 inline-flex space-x-4">
              <Image src="/img/ig.png" width="32" height="32" alt="ig logo" />

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

          <div className="block space-y-2">
            <p className="text-2xl font-bold text-[#717171]">For Investors</p>
            <p className="text-lg">Why Invest</p>
            <p className="text-lg">How It Works</p>
            <p className="text-lg">Risk</p>
            <p className="text-lg">FAQ</p>
          </div>

          <div className="block space-y-2">
            <p className="text-2xl font-bold text-[#717171]">
              For Business Owners
            </p>
            <p className="text-lg">Why Raise</p>
            <p className="text-lg">Learn</p>
            <p className="text-lg">FAQ</p>
          </div>

          <div className="block space-y-2">
            <p className="text-2xl font-bold text-[#717171]">About Us</p>
            <p className="text-lg">Privacy Policy</p>
            <p className="text-lg">Help And Support</p>
            <p className="text-lg">Terms And Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
