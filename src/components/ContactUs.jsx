import React from "react";
import GMap from "./GMap/GMap";
// import { MyMapComponent } from "./MapComponent";

const ContactUs = () => {
  return (
    <section className="contact-us__section relative bg-bg" id="contact-us">
      <div className="relative mx-auto max-w-10xl py-24 sm:py-32 lg:py-40 lg:px-4">
        <div className="pr-6 pl-6 md:w-2/3 md:pl-4 lg:w-1/2 lg:pl-8  xl:pl-12">
          <p className="mt-2 text-3xl font-bold tracking-tight text-whiteColor sm:text-4xl">
            Contact Us
          </p>

          <h2 className="text-base font-semibold leading-7 mt-4 mb-10 text-whiteColor">
            For any additional inquiries, please contact us using the
            information below:
          </h2>

          <div className="email flex flex-row items-center gap-2">
            <svg
              stroke="white"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            <a
              href="mailto:Office@remsvoltexas.com"
              className=" text-base leading-7 text-whiteColor hover:border-b-[1px] border-whiteColor transition-all duration-100"
            >
              email@.com
            </a>
          </div>

          <div className="phone flex flex-row items-center gap-2">
            <svg
              stroke="white"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="white"
              ></path>
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="white"
              ></path>
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="white"
              ></path>
            </svg>

            <a
              href="tel:832-816-8860"
              className=" text-base leading-7 text-whiteColor hover:border-b-[1px] border-whiteColor transition-all duration-100"
            >
              +1 - 832 - 816 - 8860
            </a>
          </div>

          <div className="adress flex flex-row items-center gap-2 mb-10">
            <svg
              stroke="white"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
            </svg>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://goo.gl/maps/o51N9KTsapS48gxQ7"
              className=" text-base leading-7 text-whiteColor hover:border-b-[1px] border-whiteColor transition-all duration-100"
            >
              2055 Bluffton Ln, Katy, TX 77450
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-80 overflow-hidden bg-bg md:absolute md:right-0 top-0 md:h-full md:w-1/3 lg:w-1/2">
        <GMap />
      </div>
    </section>
  );
};

export default ContactUs;
