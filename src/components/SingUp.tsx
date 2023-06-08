'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { LegacyRef, forwardRef } from 'react';
import { useToggle } from '@mantine/hooks'

const SignUp = forwardRef(
  ({ }, ref: LegacyRef<HTMLDialogElement> | undefined) => {

    const [value, toggle] = useToggle(['investor', 'bussiness-owner']);


    return <dialog ref={ref} id="sign_up" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-xl">
        <Tabs.Root className="flex flex-col" defaultValue="tab1">
          <Tabs.List
            className="flex shrink-0 border-b"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none data-[state=active]:text-i-secondary-500 data-[state=active]:focus:relative data-[state=active]:focus:border-b-2 data-[state=active]:focus:border-b-[#282828] data-[state=active]:focus:font-bold"
              value="tab1"
            >
              Log in
            </Tabs.Trigger>
            <Tabs.Trigger
              className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none data-[state=active]:text-i-secondary-500 data-[state=active]:focus:relative data-[state=active]:focus:border-b-2 data-[state=active]:focus:border-b-[#282828]"
              value="tab2"
            >
              Sign Up
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow rounded-b-md bg-white p-3 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
          >
            <div className="inline-flex w-full items-center">
              <button onClick={() => toggle()} className="btn flex-1 bg-gray-300 px-8 text-sm font-bold normal-case">
                Investor
              </button>
              <p className="px-5">OR</p>
              <button className="btn-accent btn flex-1 px-8 py-2 font-bold normal-case">
                Investor
              </button>
            </div>

            <div className="inline-flex flex-wrap">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-bordered input w-full max-w-xs"
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input w-full max-w-xs"
              />
            </div>

            <button className="btn mt-5 w-full normal-case">
              <svg
                className="h-6 w-6"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                  fill="white"
                />
                <path
                  d="M15.0009 11.0153C16.2214 11.0153 17.0448 11.5425 17.5142 11.9831L19.3487 10.192C18.222 9.14473 16.7559 8.50195 15.0009 8.50195C12.4587 8.50195 10.2631 9.96084 9.19421 12.0842L11.2959 13.7164C11.8231 12.1492 13.282 11.0153 15.0009 11.0153Z"
                  fill="#EA4335"
                />
                <path
                  d="M21.24 15.1424C21.24 14.6079 21.1967 14.2179 21.1028 13.8135H15V16.2257H18.5822C18.51 16.8251 18.12 17.7279 17.2533 18.3346L19.3044 19.9235C20.5322 18.7896 21.24 17.1213 21.24 15.1424Z"
                  fill="#4285F4"
                />
                <path
                  d="M11.302 16.2883C11.1648 15.8839 11.0853 15.4505 11.0853 15.0027C11.0853 14.555 11.1648 14.1216 11.2948 13.7172L9.19309 12.085C8.75253 12.9661 8.49976 13.9555 8.49976 15.0027C8.49976 16.05 8.75253 17.0394 9.19309 17.9205L11.302 16.2883Z"
                  fill="#FBBC05"
                />
                <path
                  d="M15.0009 21.4976C16.7559 21.4976 18.2292 20.9199 19.3053 19.9232L17.2542 18.3343C16.7053 18.7171 15.9686 18.9843 15.0009 18.9843C13.282 18.9843 11.8231 17.8504 11.3031 16.2832L9.20142 17.9154C10.2703 20.0388 12.4586 21.4976 15.0009 21.4976Z"
                  fill="#34A853"
                />
              </svg>
              Sign up with Google
            </button>

            <button className="btn bg-i-secondary-600 mt-2 w-full text-white normal-case">
              <svg
                className="h-6 w-6"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2917 6C18.4487 7.06664 18.0145 8.1116 17.4418 8.85091C16.8291 9.64392 15.7729 10.2573 14.7496 10.2253C14.5628 9.20405 15.0411 8.15187 15.6231 7.44456C16.2615 6.66394 17.3556 6.06505 18.2917 6ZM21.3658 21.0133C21.8934 20.2048 22.0905 19.797 22.5 18.8842C19.5214 17.7514 19.0442 13.5169 21.9919 11.8916C21.0928 10.7641 19.8293 10.1105 18.6367 10.1105C17.7773 10.1105 17.1885 10.3347 16.6532 10.5386C16.2072 10.7085 15.7983 10.8642 15.3009 10.8642C14.7635 10.8642 14.2876 10.6936 13.7892 10.5149C13.2416 10.3186 12.667 10.1125 11.9539 10.1125C10.6155 10.1125 9.19087 10.9303 8.28765 12.3284C7.01801 14.2975 7.23458 17.9993 9.29351 21.1527C10.0294 22.2813 11.0127 23.5493 12.2988 23.5607C12.8324 23.566 13.1875 23.4067 13.5718 23.2343C14.0116 23.0371 14.4896 22.8226 15.3174 22.8182C16.15 22.8133 16.6205 23.0303 17.0545 23.2304C17.4289 23.4031 17.7761 23.5633 18.3052 23.5576C19.5923 23.5472 20.6299 22.1419 21.3658 21.0133Z"
                  fill="#0B0B0A"
                />
              </svg>
              Sign up with Facebook
            </button>
          </Tabs.Content>
          <Tabs.Content
            className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab2"
          >
            <p className="text-mauve11 mb-5 text-[15px] leading-normal">
              Change your password here. After saving, you&apos;ll be logged
              out.
            </p>
            <fieldset className="mb-[15px] flex w-full flex-col justify-start">
              <label
                className="text-violet12 mb-2.5 block text-[13px] leading-none"
                htmlFor="currentPassword"
              >
                Current password
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="currentPassword"
                type="password"
              />
            </fieldset>
            <fieldset className="mb-[15px] flex w-full flex-col justify-start">
              <label
                className="text-violet12 mb-2.5 block text-[13px] leading-none"
                htmlFor="newPassword"
              >
                New password
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="newPassword"
                type="password"
              />
            </fieldset>
            <fieldset className="mb-[15px] flex w-full flex-col justify-start">
              <label
                className="text-violet12 mb-2.5 block text-[13px] leading-none"
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="confirmPassword"
                type="password"
              />
            </fieldset>
            <div className="mt-5 flex justify-end">
              <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] cursor-default items-center justify-center rounded px-[15px] text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Change password
              </button>
            </div>

            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </form>
    </dialog>
  }
  ,
);

SignUp.displayName = 'SignUp';
export default SignUp;

{
  /*  */
}
