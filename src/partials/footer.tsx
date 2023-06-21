import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className="z-50 mt-10 md:mt-20 flex w-full bg-i-secondary-900 p-4 text-white">
      <div className="mx-auto mt-8 w-full max-w-6xl p-4">
        <div className="lg:rows-1 grid grid-cols-2 grid-rows-2 justify-items-start gap-4 lg:grid-cols-4 lg:grid-rows-1">
          <div className="flex max-w-[195px] flex-col space-y-2">
            <Link href="/">
              <div className="inline-flex  items-center font-medium">
                <Image src="/logosm.png" width="32" height="32" alt="logo" />
                <p>
                  <span className="text-accent">Pro</span>
                  <span>Investors</span>
                </p>
              </div>
            </Link>
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
            <p className="text-base lg:text-xl font-bold text-[#717171] uppercase">For Investors</p>
            <p className="text-sm">Why Invest</p>
            <p className="text-sm">How It Works</p>
            <p className="text-sm">Risk</p>
            <p className="text-sm">FAQ</p>
          </div>

          <div className="block space-y-2">
            <p className="text-base lg:text-xl font-bold text-[#717171] uppercase">
              For Business Owners
            </p>
            <p className="text-sm">Why Raise</p>
            <p className="text-sm">Learn</p>
            <p className="text-sm">FAQ</p>
          </div>

          <div className="block space-y-2">
            <p className="text-base lg:text-xl font-bold text-[#717171] uppercase">Links</p>
            <p className="text-sm">About us</p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Help And Support</p>
            <p className="text-sm">Terms And Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
