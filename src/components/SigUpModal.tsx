import { useToggle } from '@mantine/hooks';
import { Modal, Tabs } from '@mantine/core';

type props = {
    opened: boolean;
    close: () => void;
    open: () => void;
};

function SigUpModal({ opened, close, open }: props) {
    const [value, toggle] = useToggle(['investor', 'biz']);

    return (
        <>
            <Modal
                size="lg"
                centered
                opened={opened}
                onClose={close}
                withCloseButton={true}
            >
                <Tabs defaultValue="login">
                    <Tabs.List position="center">
                        <Tabs.Tab className='text-2xl lg:text-3xl' value="login">Login</Tabs.Tab>
                        <Tabs.Tab className='text-2xl lg:text-3xl' value="signup">Sign Up</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="login">
                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-bordered input w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-bordered input w-full"
                                />
                            </div>

                            <button className="btn mt-5 w-full bg-i-secondary-600 normal-case text-white">
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
                                Sign in with Google
                            </button>

                            <button className="btn mt-2 w-full bg-i-secondary-600 normal-case text-white">
                                <svg
                                    className="h-6 w-6"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.2917 6C18.4487 7.06664 18.0145 8.1116 17.4418 8.85091C16.8291 9.64392 15.7729 10.2573 14.7496 10.2253C14.5628 9.20405 15.0411 8.15187 15.6231 7.44456C16.2615 6.66394 17.3556 6.06505 18.2917 6ZM21.3658 21.0133C21.8934 20.2048 22.0905 19.797 22.5 18.8842C19.5214 17.7514 19.0442 13.5169 21.9919 11.8916C21.0928 10.7641 19.8293 10.1105 18.6367 10.1105C17.7773 10.1105 17.1885 10.3347 16.6532 10.5386C16.2072 10.7085 15.7983 10.8642 15.3009 10.8642C14.7635 10.8642 14.2876 10.6936 13.7892 10.5149C13.2416 10.3186 12.667 10.1125 11.9539 10.1125C10.6155 10.1125 9.19087 10.9303 8.28765 12.3284C7.01801 14.2975 7.23458 17.9993 9.29351 21.1527C10.0294 22.2813 11.0127 23.5493 12.2988 23.5607C12.8324 23.566 13.1875 23.4067 13.5718 23.2343C14.0116 23.0371 14.4896 22.8226 15.3174 22.8182C16.15 22.8133 16.6205 23.0303 17.0545 23.2304C17.4289 23.4031 17.7761 23.5633 18.3052 23.5576C19.5923 23.5472 20.6299 22.1419 21.3658 21.0133Z"
                                        fill="#0B0B0A"
                                    />
                                </svg>
                                Sign in with Apple
                            </button>

                            <button className="btn mt-2 w-full bg-accent font-bold normal-case">
                                Sign in
                            </button>

                            <p className="mx-auto mt-4 max-w-xs text-center text-gray-400">
                                By signing in, I agree to ProInvestor&apos;s Terms, Conditions
                                and Privacy Policy
                            </p>
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="signup">

                        <div className="mt-6 w-full items-center space-y-2 md:inline-flex md:space-y-0">
                            <button
                                onClick={() => toggle('investor')}
                                className={`btn flex-1 ${value == 'investor' ? 'bg-i-secondary-600 text-white' : ''
                                    } w-full px-8 text-sm font-bold normal-case`}
                            >
                                Investor
                            </button>
                            <p className="px-5 text-center">OR</p>
                            <button
                                onClick={() => toggle('biz')}
                                className={`btn flex-1 ${value == 'biz' ? 'bg-i-secondary-600  text-white' : ''
                                    } w-full px-8 text-sm font-bold normal-case`}
                            >
                                Bussines Owner
                            </button>
                        </div>

                        <div className="inline-flex w-full flex-wrap space-x-0 md:flex-nowrap md:space-x-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-bordered input w-full"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-bordered input w-full"
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
                                className="input-bordered input w-full "
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input-bordered input w-full "
                            />
                        </div>

                        {value == 'biz' && (
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        {' '}
                                        Website or Social Media Link
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-bordered input w-full "
                                />
                            </div>
                        )}

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

                        <button className="btn mt-2 w-full bg-i-secondary-600 normal-case text-white">
                            <svg
                                className="h-6 w-6"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.2917 6C18.4487 7.06664 18.0145 8.1116 17.4418 8.85091C16.8291 9.64392 15.7729 10.2573 14.7496 10.2253C14.5628 9.20405 15.0411 8.15187 15.6231 7.44456C16.2615 6.66394 17.3556 6.06505 18.2917 6ZM21.3658 21.0133C21.8934 20.2048 22.0905 19.797 22.5 18.8842C19.5214 17.7514 19.0442 13.5169 21.9919 11.8916C21.0928 10.7641 19.8293 10.1105 18.6367 10.1105C17.7773 10.1105 17.1885 10.3347 16.6532 10.5386C16.2072 10.7085 15.7983 10.8642 15.3009 10.8642C14.7635 10.8642 14.2876 10.6936 13.7892 10.5149C13.2416 10.3186 12.667 10.1125 11.9539 10.1125C10.6155 10.1125 9.19087 10.9303 8.28765 12.3284C7.01801 14.2975 7.23458 17.9993 9.29351 21.1527C10.0294 22.2813 11.0127 23.5493 12.2988 23.5607C12.8324 23.566 13.1875 23.4067 13.5718 23.2343C14.0116 23.0371 14.4896 22.8226 15.3174 22.8182C16.15 22.8133 16.6205 23.0303 17.0545 23.2304C17.4289 23.4031 17.7761 23.5633 18.3052 23.5576C19.5923 23.5472 20.6299 22.1419 21.3658 21.0133Z"
                                    fill="#0B0B0A"
                                />
                            </svg>
                            Sign in with Apple
                        </button>

                        <button className="btn mt-2 w-full bg-accent font-bold normal-case">
                            Sign in
                        </button>

                        <p className="mx-auto mt-4 max-w-xs text-center text-gray-400">
                            By signing in, I agree to ProInvestor&apos;s Terms, Conditions and
                            Privacy Policy
                        </p>
                    </Tabs.Panel>
                </Tabs>
            </Modal>
        </>
    );
}

export default SigUpModal;
