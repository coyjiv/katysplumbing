import { Link } from "react-scroll";
const navigation = {
  main: [
    { scroll: "about-us", name: "About us", href: "#" },
    { scroll: "services", name: "Services", href: "#" },
    { scroll: "reviews", name: "Reviews", href: "#" },
    { scroll: "contact-us", name: "Contact us", href: "#" },
  ],
  social: [
    {
      name: "katyjetting@gmail.com",
      href: "mailto: katyjetting@gmail.com",
    },

    {
      name: "+1-832-816-8860",
      href: "tel: 832-816-8860",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ultraViolet">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-[60px] lg:pb-9 lg:px-8">
        <div className="flex flex-col gap-6">
          <nav
            className="-mb-6 text-whiteColor/60 columns-2 lg:columns-2 sm:flex sm:justify-center gap-0 lg:gap-4 text-center"
            aria-label="Footer"
          >
            {navigation.main.map((item, i) => (
              <Link
                to={item.scroll}
                href={"#"+item.scroll}
                smooth={true}
                duration={500}
                offset={navigation.main.length - 1 === i ? -100 : -50}
                key={i}
                className="block text-md cursor-pointer font-display leading-6 hover:text-whiteColor duration-300"
              >
                    {item.name}
              </Link>
            ))}
          </nav>
          <div className=" text-whiteColor/60 my-8 lg:my-0 flex flex-col lg:flex-row justify-center gap-2 items-center lg:items-start lg:gap-8">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-display text-md hover:text-whiteColor duration-300 cursor-pointer"
              >
                <p className="" aria-hidden="true">
                  {item.name}
                </p>
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 text-whiteColor/60 font-display text-center text-sm leading-5 pb-8 lg:pb-0 text-white">
          &copy; 2023 Katys Plumbing Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
