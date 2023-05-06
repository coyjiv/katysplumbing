import { Link } from "react-scroll";
export default function AboutUs() {
  return (
    // OnHover should move

    <div className="about-us relative bg-ultraViolet group" id="about-us">
      <div className="relative h-80 overflow-hidden bg-bg md:absolute md:left-0 md:h-full md:w-4/12 lg:w-1/2">
        <picture className="sepia-[.50] ">
          <source
            media="(max-width: 1023px)"
            srcSet="/img/about-us-bg-sm.webp"
          />
          <source media="(min-width: 1024px)" srcSet="/img/about-us-bg.webp" />
          <img
            src="/img/about-us-bg-sm.webp"
            className="h-full  w-full object-cover"
            alt="About us"
          />
        </picture>
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px] group-hover:-translate-y-32 transition-transform duration-300"
        >
          <path
            className="z-1  fill-brightViolet"
            fillOpacity=".7"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-whiteColor sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6  text-base leading-7 text-gray-300">
            At Katy Jetting, we understand the importance of having a reliable
            plumbing system in your home. That&apos;s why we provide a range of
            services to meet your needs, from fixing leaky faucets to installing
            new water heaters. Our team of expert plumbers is highly skilled and
            trained to handle any plumbing issue with ease and efficiency.
          </p>
          <Link to="form1" smooth={true} duration={500}>
            <div className="mt-8">
              <p className="bg-bg  hover:bg-yinBlue shadow-2xl duration-300 inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-whiteColor  hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer">
                Apply Now
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
