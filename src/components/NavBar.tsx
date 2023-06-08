'use client'

import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import Link from "next/link";
import { useRef } from "react";
import SignUp from "./SingUp";
export const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/features",
    text: "Features",
  },

  {
    href: "/abuout-us",
    text: "About Us",
  },
  {
    href: "/login",
    text: "Login",
  },
];

export const linksJsx = links.map((link: any, index) => (
  <CustomLink key={index} href={link.href} text={link.text} />
));
const NavBar = () => {

  const ref = useRef<HTMLDialogElement | null>(null)

  return (
    <>
      <SignUp ref={ref} />

      {/* <MenuDrawer /> */}
      <div id="nav" className="navbar">
        <div className="flex-none">
          <div className="inline-flex items-center font-medium">
            <Image
              className="w-16"
              src="/logo.png"
              width="109"
              height="78"
              alt="logo"
            />
            <p onClick={() => ref?.current?.showModal()}>
              <span className="text-accent text-lg lg:text-4xl">Pro</span>
              <span className="text-lg lg:text-4xl">Investors</span>
            </p>
          </div>
        </div>

        <div className="flex-1 justify-end">

          <div className="hidden items-center lg:inline-flex">
            <div>
              {linksJsx}
            </div>
            <button className="btn-accent btn px-8 py-2 font-bold normal-case">
              Sign Up
            </button>
          </div>
          <div className="dropdown-end dropdown lg:hidden">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu w-52 space-y-4 rounded-lg bg-i-secondary-300 p-2 py-4 text-sm shadow"
            >
              {linksJsx}
              <li>
                <Link className="px-8 py-2 font-bold" href="/sign-up">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
