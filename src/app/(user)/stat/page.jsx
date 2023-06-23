import Image from 'next/image';
import AreaChart from '@/components/AreaChart';
import BarChart from '@/components/BarChart';
function Page() {
  const data = [
    {
      business: 'Blissfull Bakes',
      sub: 'Sweet Haven Bakery',
      thumb: '/img/business/blissfull-cake-thumb.png',
      barChatData: [
        [38000, 31000, 32000, 21000, 42000, 30000],
        [28000, 19000, 15000, 9000, 22000, 19000],
      ],
      areaChartData: [
        1000, 8000, 1700, 6000, 4700, 10000, 6000, 20000, 15000, 10000,
      ],
      worth: '$100,450',
      totatlCapital: '$80,000',
      investors: '10',
      revenue: '$20,450',
      totalLoss: '$5,500',
    },
    {
      business: 'TeachEase Solution',
      sub: 'TechHub Solutions',
      thumb: '/img/business/tech-easy-thumb.png',
      barChatData: [
        [38000, 31000, 32000, 21000, 42000, 30000],
        [28000, 19000, 15000, 9000, 22000, 19000],
      ],
      areaChartData: [
        1000, 8000, 1700, 6000, 4700, 10000, 6000, 20000, 15000, 10000,
      ],
      worth: '$110,800',
      totatlCapital: '$90,000',
      investors: '8',
      revenue: '$20,800',
      totalLoss: '$5,400',
    },
  ];
  return (
    <>
      <div className="mt-2 px-4">
        <p className="text-lg font-bold lg:text-3xl">Businesses</p>
      </div>
      {data.map((item, i) => (
        <>
          <div className="mt-1 px-4 py-2">
            <div className="flex space-x-4">
              <div className="relative w-full rounded-xl  bg-[#415993] text-white md:basis-3/5">
                <div className="px-2 pt-2">
                  <div className="inline-flex items-center space-x-4">
                    <Image
                      src={item.thumb}
                      width="40"
                      height="40"
                      alt={`${item.business} icon`}
                    />
                    <div>
                      <h2 className="text-base font-bold lg:text-4xl">
                        {item.business}
                      </h2>
                      <p className="text-xs font-normal md:text-base ">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="relative p-2">
                  <div className="absolute left-0 top-0 inline-flex items-center px-4">
                    <span className="text-base font-bold md:text-xl">
                      {item.worth}
                    </span>
                    <p className="text-xs md:text-sm">+15,000</p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_334_309)">
                        <path
                          d="M10.6668 4L12.1968 5.53L8.9435 8.78L6.27683 6.11333L1.3335 11.0567L2.27683 12L6.27683 8L8.9435 10.6667L13.1368 6.47L14.6668 8V4H10.6668Z"
                          fill="#04C900"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_334_309">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <AreaChart data={item.areaChartData} />
                </div>
              </div>
              <div className="hidden w-full items-baseline rounded-xl bg-[#415993] p-2 md:flex md:basis-2/5 md:flex-col md:justify-evenly">
                <button className="btn-accent btn-sm btn">5 months</button>
                <BarChart data={item.barChatData} />
                {
                  <div className="inline-flex">
                    <p>2021</p>
                    <p>2022</p>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap space-y-4 px-4 md:flex-nowrap md:space-x-4 md:space-y-0">
            <div className="w-full md:basis-3/5 ">
              <div className=" grid grid-cols-2 grid-rows-2 justify-items-center gap-4  lg:grid-cols-4 lg:grid-rows-1">
                <div className="h-[120px] w-full space-y-2 rounded-xl  bg-i-secondary-700 p-2 text-white md:w-[140px]">
                  <h2>Total Capital</h2>
                  <p>{item.totatlCapital}</p>
                  <svg
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_298_353" fill="white">
                      <path d="M10.5 11.6312C16.2969 11.6312 21 9.22532 21 6.25994C21 3.29455 16.2969 0.888672 10.5 0.888672C4.69973 0.888672 0 3.29455 0 6.25994C0 9.22532 4.69973 11.6312 10.5 11.6312ZM11.9492 7.03278C11.6553 6.93487 10.999 6.81597 9.9873 6.6691C9.07468 6.53969 8.36374 6.41033 7.85105 6.28444C7.33835 6.15855 6.92136 5.98197 6.60007 5.75465C6.28217 5.52558 6.12155 5.25982 6.12155 4.95908C6.12155 4.56217 6.40866 4.20375 6.97949 3.88729C7.55032 3.57083 8.44922 3.37674 9.6763 3.30507V2.67909H11.334V3.30507C13.1866 3.39599 14.3863 3.82614 14.9297 4.59193L12.6465 4.9766C12.2022 4.45032 11.5152 4.18629 10.5821 4.18629C10.1138 4.18629 9.73782 4.24577 9.45416 4.36287C9.17049 4.47998 9.03033 4.62338 9.03033 4.79123C9.03033 4.96082 9.16705 5.09197 9.44049 5.18289C9.71053 5.27381 10.2984 5.38744 11.1939 5.52211C12.1783 5.66898 12.9508 5.80886 13.5079 5.93828C14.0685 6.06942 14.5162 6.25126 14.8512 6.48033C15.1827 6.71112 15.3502 6.98041 15.3502 7.28814C15.3502 7.76372 15.005 8.15711 14.318 8.47362C13.6275 8.78835 12.6329 8.97544 11.3341 9.0314V9.84078H9.67635V9.03475C7.50591 8.94383 6.16607 8.42802 5.64654 7.48738L8.21002 7.21462C8.44927 7.80563 9.23541 8.1011 10.5684 8.1011C11.1939 8.1011 11.6553 8.03816 11.9493 7.91054C12.2432 7.78465 12.3902 7.63078 12.3902 7.45241C12.3902 7.26705 12.2432 7.12717 11.9492 7.03278ZM0 9.84078C0 9.52253 0.0615234 9.21307 0.167508 8.9106C1.94824 11.0612 5.85156 12.5264 10.5 12.5264C11.833 12.5264 13.0943 12.3935 14.2734 12.1715C13.043 12.9355 11.9936 13.9671 11.2041 15.1945C10.9683 15.2016 10.7359 15.212 10.5 15.212C4.69973 15.212 0 12.8062 0 9.84078ZM21 9.84078C21 10.194 20.9283 10.5402 20.7983 10.8759C20.2925 10.7919 19.7798 10.736 19.2499 10.736C18.9628 10.736 18.6826 10.7552 18.4023 10.7797C19.4038 10.2464 20.2412 9.62044 20.8325 8.9106C20.935 9.21307 21 9.52259 21 9.84078ZM14.4888 29.1315C13.2583 29.3903 11.9116 29.5354 10.5 29.5354C4.69973 29.5354 0 27.1295 0 24.1641C0 23.8459 0.0615234 23.5364 0.167508 23.234C1.94824 25.3845 5.85156 26.8498 10.5 26.8498C10.9409 26.8498 11.3682 26.8253 11.792 26.7991C12.5406 27.7363 13.4566 28.5266 14.4888 29.1315ZM0 20.5833C0 20.2651 0.0615234 19.9556 0.167508 19.6531C1.88333 21.7233 5.57473 23.1448 9.9942 23.2497C10.2574 24.2131 10.6607 25.117 11.1836 25.9371C10.9546 25.9441 10.729 25.9545 10.5001 25.9545C4.69973 25.9546 0 23.5487 0 20.5833ZM0 17.0025C0 16.6842 0.0615234 16.3748 0.167508 16.0723C1.84231 18.0918 5.397 19.4905 9.66946 19.6549C9.64212 19.9609 9.625 20.2703 9.625 20.5833C9.625 21.1882 9.68652 21.7793 9.78906 22.3563C4.32376 22.1674 0 19.8454 0 17.0025ZM0 13.4216C0 13.1034 0.0615234 12.7939 0.167508 12.4914C1.94824 14.6421 5.85156 16.1073 10.5 16.1073C10.565 16.1073 10.6265 16.1003 10.6914 16.1003C10.2744 16.9308 9.9668 17.8277 9.7959 18.7754C4.32715 18.5883 0 16.2646 0 13.4216ZM19.25 11.6312C14.4135 11.6312 10.5 15.6422 10.5 20.5833C10.5 25.5297 14.4135 29.5354 19.25 29.5354C24.083 29.5354 28 25.5297 28 20.5833C28 15.6422 24.083 11.6312 19.25 11.6312ZM22.3057 25.0087C21.7554 25.6416 20.9555 26.0123 19.9165 26.1242V27.7433H18.5903V26.1331C16.8574 25.9512 15.7841 24.9178 15.3706 23.0365L17.418 22.4909C17.6094 23.6729 18.2383 24.2639 19.3081 24.2639C19.8037 24.2639 20.1729 24.138 20.4087 23.8845C20.6445 23.631 20.7641 23.3267 20.7641 22.9683C20.7641 22.5976 20.6445 22.3162 20.4087 22.1273C20.1729 21.935 19.6499 21.692 18.8398 21.3982C18.1118 21.1412 17.541 20.886 17.1308 20.6306C16.7206 20.3789 16.3891 20.0257 16.1294 19.571C15.8764 19.1147 15.7466 18.5832 15.7466 17.9799C15.7466 17.1861 15.9756 16.471 16.4335 15.8363C16.8915 15.2016 17.6093 14.8152 18.5903 14.6736V13.4216H19.9165V14.6735C21.3999 14.8554 22.3604 15.7121 22.7944 17.2455L20.9692 18.0148C20.6137 16.9605 20.0635 16.436 19.3149 16.436C18.9424 16.436 18.6416 16.5531 18.416 16.7891C18.1869 17.0252 18.0742 17.3084 18.0742 17.6424C18.0742 17.9851 18.1835 18.2456 18.4023 18.4292C18.621 18.611 19.0893 18.8366 19.8037 19.1059C20.5932 19.3996 21.2119 19.6777 21.6562 19.9399C22.104 20.2004 22.4628 20.5641 22.7329 21.0239C22.9961 21.4855 23.1328 22.024 23.1328 22.6395C23.1328 23.5872 22.856 24.3757 22.3057 25.0087Z" />
                    </mask>
                    <path
                      d="M10.5 11.6312C16.2969 11.6312 21 9.22532 21 6.25994C21 3.29455 16.2969 0.888672 10.5 0.888672C4.69973 0.888672 0 3.29455 0 6.25994C0 9.22532 4.69973 11.6312 10.5 11.6312ZM11.9492 7.03278C11.6553 6.93487 10.999 6.81597 9.9873 6.6691C9.07468 6.53969 8.36374 6.41033 7.85105 6.28444C7.33835 6.15855 6.92136 5.98197 6.60007 5.75465C6.28217 5.52558 6.12155 5.25982 6.12155 4.95908C6.12155 4.56217 6.40866 4.20375 6.97949 3.88729C7.55032 3.57083 8.44922 3.37674 9.6763 3.30507V2.67909H11.334V3.30507C13.1866 3.39599 14.3863 3.82614 14.9297 4.59193L12.6465 4.9766C12.2022 4.45032 11.5152 4.18629 10.5821 4.18629C10.1138 4.18629 9.73782 4.24577 9.45416 4.36287C9.17049 4.47998 9.03033 4.62338 9.03033 4.79123C9.03033 4.96082 9.16705 5.09197 9.44049 5.18289C9.71053 5.27381 10.2984 5.38744 11.1939 5.52211C12.1783 5.66898 12.9508 5.80886 13.5079 5.93828C14.0685 6.06942 14.5162 6.25126 14.8512 6.48033C15.1827 6.71112 15.3502 6.98041 15.3502 7.28814C15.3502 7.76372 15.005 8.15711 14.318 8.47362C13.6275 8.78835 12.6329 8.97544 11.3341 9.0314V9.84078H9.67635V9.03475C7.50591 8.94383 6.16607 8.42802 5.64654 7.48738L8.21002 7.21462C8.44927 7.80563 9.23541 8.1011 10.5684 8.1011C11.1939 8.1011 11.6553 8.03816 11.9493 7.91054C12.2432 7.78465 12.3902 7.63078 12.3902 7.45241C12.3902 7.26705 12.2432 7.12717 11.9492 7.03278ZM0 9.84078C0 9.52253 0.0615234 9.21307 0.167508 8.9106C1.94824 11.0612 5.85156 12.5264 10.5 12.5264C11.833 12.5264 13.0943 12.3935 14.2734 12.1715C13.043 12.9355 11.9936 13.9671 11.2041 15.1945C10.9683 15.2016 10.7359 15.212 10.5 15.212C4.69973 15.212 0 12.8062 0 9.84078ZM21 9.84078C21 10.194 20.9283 10.5402 20.7983 10.8759C20.2925 10.7919 19.7798 10.736 19.2499 10.736C18.9628 10.736 18.6826 10.7552 18.4023 10.7797C19.4038 10.2464 20.2412 9.62044 20.8325 8.9106C20.935 9.21307 21 9.52259 21 9.84078ZM14.4888 29.1315C13.2583 29.3903 11.9116 29.5354 10.5 29.5354C4.69973 29.5354 0 27.1295 0 24.1641C0 23.8459 0.0615234 23.5364 0.167508 23.234C1.94824 25.3845 5.85156 26.8498 10.5 26.8498C10.9409 26.8498 11.3682 26.8253 11.792 26.7991C12.5406 27.7363 13.4566 28.5266 14.4888 29.1315ZM0 20.5833C0 20.2651 0.0615234 19.9556 0.167508 19.6531C1.88333 21.7233 5.57473 23.1448 9.9942 23.2497C10.2574 24.2131 10.6607 25.117 11.1836 25.9371C10.9546 25.9441 10.729 25.9545 10.5001 25.9545C4.69973 25.9546 0 23.5487 0 20.5833ZM0 17.0025C0 16.6842 0.0615234 16.3748 0.167508 16.0723C1.84231 18.0918 5.397 19.4905 9.66946 19.6549C9.64212 19.9609 9.625 20.2703 9.625 20.5833C9.625 21.1882 9.68652 21.7793 9.78906 22.3563C4.32376 22.1674 0 19.8454 0 17.0025ZM0 13.4216C0 13.1034 0.0615234 12.7939 0.167508 12.4914C1.94824 14.6421 5.85156 16.1073 10.5 16.1073C10.565 16.1073 10.6265 16.1003 10.6914 16.1003C10.2744 16.9308 9.9668 17.8277 9.7959 18.7754C4.32715 18.5883 0 16.2646 0 13.4216ZM19.25 11.6312C14.4135 11.6312 10.5 15.6422 10.5 20.5833C10.5 25.5297 14.4135 29.5354 19.25 29.5354C24.083 29.5354 28 25.5297 28 20.5833C28 15.6422 24.083 11.6312 19.25 11.6312ZM22.3057 25.0087C21.7554 25.6416 20.9555 26.0123 19.9165 26.1242V27.7433H18.5903V26.1331C16.8574 25.9512 15.7841 24.9178 15.3706 23.0365L17.418 22.4909C17.6094 23.6729 18.2383 24.2639 19.3081 24.2639C19.8037 24.2639 20.1729 24.138 20.4087 23.8845C20.6445 23.631 20.7641 23.3267 20.7641 22.9683C20.7641 22.5976 20.6445 22.3162 20.4087 22.1273C20.1729 21.935 19.6499 21.692 18.8398 21.3982C18.1118 21.1412 17.541 20.886 17.1308 20.6306C16.7206 20.3789 16.3891 20.0257 16.1294 19.571C15.8764 19.1147 15.7466 18.5832 15.7466 17.9799C15.7466 17.1861 15.9756 16.471 16.4335 15.8363C16.8915 15.2016 17.6093 14.8152 18.5903 14.6736V13.4216H19.9165V14.6735C21.3999 14.8554 22.3604 15.7121 22.7944 17.2455L20.9692 18.0148C20.6137 16.9605 20.0635 16.436 19.3149 16.436C18.9424 16.436 18.6416 16.5531 18.416 16.7891C18.1869 17.0252 18.0742 17.3084 18.0742 17.6424C18.0742 17.9851 18.1835 18.2456 18.4023 18.4292C18.621 18.611 19.0893 18.8366 19.8037 19.1059C20.5932 19.3996 21.2119 19.6777 21.6562 19.9399C22.104 20.2004 22.4628 20.5641 22.7329 21.0239C22.9961 21.4855 23.1328 22.024 23.1328 22.6395C23.1328 23.5872 22.856 24.3757 22.3057 25.0087Z"
                      fill="#F2F2F2"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      mask="url(#path-1-inside-1_298_353)"
                    />
                  </svg>
                </div>

                <div className="h-[120px] w-full space-y-2 rounded-xl bg-i-secondary-700 p-2 text-white md:w-[140px]">
                  <h2>Investors</h2>
                  <p>{item.investors}</p>
                  <svg
                    width="34"
                    height="22"
                    viewBox="0 0 34 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.1818 9.30456C25.7395 9.30456 27.8027 7.24046 27.8027 4.70062C27.8027 2.16078 25.7395 0.0966797 23.1818 0.0966797C20.6241 0.0966797 18.5455 2.16078 18.5455 4.70062C18.5455 7.24046 20.6241 9.30456 23.1818 9.30456ZM10.8182 9.30456C13.3759 9.30456 15.4391 7.24046 15.4391 4.70062C15.4391 2.16078 13.3759 0.0966797 10.8182 0.0966797C8.26045 0.0966797 6.18182 2.16078 6.18182 4.70062C6.18182 7.24046 8.26045 9.30456 10.8182 9.30456ZM10.8182 12.3739C7.20955 12.3739 0 14.1694 0 17.7451V21.5817H21.6364V17.7451C21.6364 14.1694 14.4268 12.3739 10.8182 12.3739ZM23.1818 12.3739C22.7336 12.3739 22.2314 12.4045 21.6905 12.4583C23.4832 13.7397 24.7273 15.4662 24.7273 17.7451V21.5817H34V17.7451C34 14.1694 26.7905 12.3739 23.1818 12.3739Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </div>

                <div className="h-[120px] w-full space-y-2 rounded-xl bg-i-secondary-700 p-2 text-white md:w-[140px]">
                  <h2>Revenue</h2>
                  <p>{item.revenue}</p>
                </div>
                <div className="h-[120px] w-full space-y-2 rounded-xl bg-i-secondary-700 p-2 text-white md:w-[140px]">
                  <h2>Total Loss</h2>
                  <p>{item.totalLoss}</p>
                </div>
              </div>

              <div className="hidden pt-4 md:block">
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-lg font-bold lg:text-2xl">
                    Recent Activities
                  </p>
                  <p className="text-sm font-bold">See All</p>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-md bg-i-secondary p-3 text-white">
                  <div className="inline-flex basis-1/3 items-center space-x-2">
                    <div>
                      <p className="text-xs font-bold lg:text-lg">
                        Isabella Davies
                      </p>
                      <p className="text-xs font-thin lg:text-sm">
                        CEO at Bakshire Heatway
                      </p>
                    </div>
                  </div>

                  <p className="basis-1/3 text-left text-xs font-medium lg:text-lg">
                    Intrest rate
                    <span className="text-xs font-bold lg:text-lg"> 10%</span>
                  </p>
                  <p className="text-xs font-bold lg:text-lg">$30,000</p>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-md bg-i-secondary p-3 text-white">
                  <div className="inline-flex basis-1/3 items-center space-x-2">
                    <p className="text-xs font-medium   lg:text-lg">
                      Robert Daniel
                    </p>
                  </div>

                  <p className="basis-1/3 text-left text-xs font-medium lg:text-lg">
                    Intrest rate
                    <span className="text-xs font-bold lg:text-lg"> 20%</span>
                  </p>
                  <p className="text-xs font-bold lg:text-lg">$50,000</p>
                </div>
              </div>
            </div>

            <div className="flex w-full rounded-xl bg-[#415993] p-4 text-white md:max-h-72 md:basis-2/5">
              <div className="flex w-1/2 flex-col justify-between space-y-8 text-base md:text-lg">
                <p>Invoices</p>
                <div>
                  <p className="text-xs md:text-sm">Total Orders</p>
                  <p className="text-lg font-bold md:text-xl">2,026</p>
                </div>

                <div>
                  <p className="text-xs md:text-sm">Net Profit</p>
                  <p className="text-lg font-bold md:text-xl">$5,026</p>
                </div>

                <p className="text-lg md:text-xl">May 25, 2023</p>
              </div>
              <div className="w-1/2">
                <div className="flex h-full flex-col justify-between">
                  <button className="btn-accent btn-sm btn max-w-fit">
                    This month
                  </button>

                  <div
                    className="radial-progress"
                    style={{ '--value': 75, '--size': '10rem' }}
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Page;