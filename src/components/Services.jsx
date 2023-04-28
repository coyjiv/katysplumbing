import { Link } from "react-scroll";
import { tiers } from "../constants/services";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <section className="services__section bg-[#ebe0bf] py-24 sm:py-12">
      <div id="services" className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className=" text-4xl font-bold tracking-tight text-[#392820] sm:text-5xl">
            Services
          </p>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-8 text-[#392820]">
          We offer an extensive array of diverse services ranging from the
          construction of residential properties to the development of
          commercial structures.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.color,
                tier.featured
                  ? "Custom bg-[#392820] ring-gray-900"
                  : "ring-gray-200",
                "rounded-3xl p-8 ring-1 xl:p-10 hover:-translate-y-4 duration-150 "
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-200",
                  "text-lg font-semibold leading-8   "
                )}
              >
                {tier.name}
              </h3>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-200",
                  "mt-4 text-sm leading-6"
                )}
              >
                {tier.description}
              </p>

              <picture>
                <source media="(max-width: 1023px)" srcSet={tier.smallImg} />
                <source media="(min-width: 1024px)" srcSet={tier.img} />
                <img
                  src={tier.img}
                  className="rounded-2xl rounded-t-full h-52 w-full object-cover pt-4 "
                  alt="service-option"
                />
              </picture>

              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-4xl font-bold tracking-tight"
                  )}
                ></span>
              </p>
              <Link to="apply-form" smooth={true} duration={500}>
                <p
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-[#986235] text-white hover:bg-[#a67651] focus-visible:outline-orange-400"
                      : "bg-[#a67651] text-white shadow-sm hover:bg-[#82532a] focus-visible:outline-orange-400",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
                  )}
                >
                  {tier.cta}
                </p>
              </Link>
              <ul
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-200",
                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
