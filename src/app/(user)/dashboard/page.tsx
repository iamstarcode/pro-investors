import BusinessCard, { BusinessCardProps } from '@/components/BusinessCard';

function Dashboard() {
  const business: BusinessCardProps[] = [
    {
      id: "1",
      imgSrc: '/img/business/blissfull-cake.png',
      title: 'Blissfull Bakes',
      subtitle: 'Sweet Haven Bakery',
      investors: 5,
      min: '$10,000',
      raised: '$80,000',
    },

    {
      id: "2",
      imgSrc: '/img/business/tech-ease.png',
      title: 'TechEase Solutions',
      subtitle: 'TechHub Solutions',
      investors: 10,
      min: '$10,000',
      raised: '$90,000',
    },

    {
      id: "1",
      imgSrc: '/img/business/blissfull-cake.png',
      title: 'Blissfull Bakes',
      subtitle: 'Sweet Haven Bakery',
      investors: 5,
      min: '$10,000',
      raised: '$80,000',
    },

    {
      id: "2",
      imgSrc: '/img/business/tech-ease.png',
      title: 'TechEase Solutions',
      subtitle: 'TechHub Solutions',
      investors: 10,
      min: '$10,000',
      raised: '$90,000',
    }, {
      id: "1",
      imgSrc: '/img/business/blissfull-cake.png',
      title: 'Blissfull Bakes',
      subtitle: 'Sweet Haven Bakery',
      investors: 5,
      min: '$10,000',
      raised: '$80,000',
    },

    {
      id: "2",
      imgSrc: '/img/business/tech-ease.png',
      title: 'TechEase Solutions',
      subtitle: 'TechHub Solutions',
      investors: 10,
      min: '$10,000',
      raised: '$90,000',
    }, {
      id: "1",
      imgSrc: '/img/business/blissfull-cake.png',
      title: 'Blissfull Bakes',
      subtitle: 'Sweet Haven Bakery',
      investors: 5,
      min: '$10,000',
      raised: '$80,000',
    },

    {
      id: "2",
      imgSrc: '/img/business/tech-ease.png',
      title: 'TechEase Solutions',
      subtitle: 'TechHub Solutions',
      investors: 10,
      min: '$10,000',
      raised: '$90,000',
    }, {
      id: "1",
      imgSrc: '/img/business/blissfull-cake.png',
      title: 'Blissfull Bakes',
      subtitle: 'Sweet Haven Bakery',
      investors: 5,
      min: '$10,000',
      raised: '$80,000',
    },

    {
      id: "2",
      imgSrc: '/img/business/tech-ease.png',
      title: 'TechEase Solutions',
      subtitle: 'TechHub Solutions',
      investors: 10,
      min: '$10,000',
      raised: '$90,000',
    },
  ];
  return (
    <>
      <div className="mt-5 px-4 py-4">
        <p className="text-lg font-bold lg:text-4xl">
          Investment opportunities on Proinvestor.
        </p>
        <p className="mt-2 text-xs text-gray-500 lg:text-lg">
          Explore current investment opportunities on Proinvestor. All companies
          are vetted and pass due diligence.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-bold lg:text-2xl">
            Newly listed businesses
          </p>
          <p className="text-sm font-bold">See All</p>
        </div>
      </div>
      <div className="mt-3 w-screen pl-4 xl:max-w-5xl">
        <div className="scrollbar flex space-x-3 overflow-x-scroll">
          {business.map((item: BusinessCardProps, index: number) => (
            <BusinessCard
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              subtitle={item.subtitle}
              investors={item.investors}
              min={item.min}
              raised={item.raised}
            />
          ))}
        </div>
      </div>

      {/*  Top Business */}
      <div>
        <div className="px-4 ">
          <div className="mt-5 flex items-center justify-between">
            <p className="text-lg font-bold lg:text-2xl">Top businesses</p>
            <p className="text-sm font-bold">See All</p>
          </div>
        </div>
        <div>
          <div className="mt-3 w-screen pl-4 xl:max-w-5xl">
            <div className="scrollbar flex space-x-3 overflow-x-scroll">
              {business.map((item: BusinessCardProps, index: number) => (
                <BusinessCard
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  subtitle={item.subtitle}
                  investors={item.investors}
                  min={item.min}
                  raised={item.raised}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  Funded Business */}
      <div>
        <div className="px-4 ">
          <div className="mt-5 flex items-center justify-between">
            <p className="text-lg font-bold lg:text-2xl">Funded businesses</p>
            <p className="text-sm font-bold">See All</p>
          </div>
        </div>
        <div>
          <div className="mt-3 w-screen pl-4 xl:max-w-5xl">
            <div className="scrollbar flex space-x-3 overflow-x-scroll">
              {business.map((item: BusinessCardProps, index: number) => (
                <BusinessCard
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  subtitle={item.subtitle}
                  investors={item.investors}
                  min={item.min}
                  raised={item.raised}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-bold lg:text-2xl">Transactions</p>
          <p className="text-sm font-bold">See All</p>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-md bg-i-secondary p-3 text-white">
          <div className="inline-flex basis-1/3 items-center space-x-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#F2F2F2" />
              <path
                d="M23.7375 14.2482L24.7277 14.1088L24.5666 12.9639L23.4568 13.2883L23.7375 14.2482ZM14.9428 26.0272C14.6433 26.4911 14.7766 27.1101 15.2406 27.4097C15.7045 27.7092 16.3235 27.5759 16.6231 27.1119L14.9428 26.0272ZM25.8084 21.7892L24.7277 14.1088L22.7472 14.3875L23.8279 22.0679L25.8084 21.7892ZM23.4568 13.2883L16.0125 15.4651L16.5738 17.3847L24.0181 15.208L23.4568 13.2883ZM22.8973 13.7058L14.9428 26.0272L16.6231 27.1119L24.5776 14.7905L22.8973 13.7058Z"
                fill="#222222"
              />
            </svg>
            <p className="text-xs font-medium  lg:text-lg">
              Invested in Blissfull bakes
            </p>
          </div>

          <p className="basis-1/3 text-left text-xs font-medium lg:text-lg">
            Intrest rate
            <span className="text-xs font-bold lg:text-lg"> 10%</span>
          </p>
          <p className="text-xs font-bold lg:text-lg">$30,000</p>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-md bg-i-secondary p-3 text-white">
          <div className="inline-flex basis-1/3 items-center space-x-2">
            <svg
              width="40"
              text-center
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#F2F2F2" />
              <path
                d="M23.7375 14.2482L24.7277 14.1088L24.5666 12.9639L23.4568 13.2883L23.7375 14.2482ZM14.9428 26.0272C14.6433 26.4911 14.7766 27.1101 15.2406 27.4097C15.7045 27.7092 16.3235 27.5759 16.6231 27.1119L14.9428 26.0272ZM25.8084 21.7892L24.7277 14.1088L22.7472 14.3875L23.8279 22.0679L25.8084 21.7892ZM23.4568 13.2883L16.0125 15.4651L16.5738 17.3847L24.0181 15.208L23.4568 13.2883ZM22.8973 13.7058L14.9428 26.0272L16.6231 27.1119L24.5776 14.7905L22.8973 13.7058Z"
                fill="#222222"
              />
            </svg>
            <p className="text-xs font-medium   lg:text-lg">
              TechEase Solutions
            </p>
          </div>

          <p className="basis-1/3 text-left text-xs font-medium lg:text-lg">
            Intrest rate
            <span className="text-xs font-bold lg:text-lg"> 20%</span>
          </p>
          <p className="text-xs font-bold lg:text-lg">$50,000</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
