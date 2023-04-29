import { Link } from 'react-scroll';
import { tiers } from '../constants/services';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Services() {
  const randomNum = Math.random() * 4 - 2;
  const roundedNum = Math.round(randomNum);

  return (
    <section className='services__section py-24 sm:py-12 relative'>
      <div className='bg bg-bg absolute h-full w-full -z-20'></div>
      <div className="bg-shape bg-[url('/img/bg-shape.webp')] absolute h-full w-full -z-10 blur-sm "></div>
      <div id='services' className='mx-auto max-w-7xl px-6 lg:px-8 pb-20'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className=' text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Our Services
          </p>
        </div>
        <p className='mx-auto mt-10 max-w-2xl text-center text-lg leading-8 text-white'>
          With more than 30 years of collective plumbing expertise, Katty
          Jetting is your go-to for resolving all your plumbing issues promptly
          and affordably. Trust our skilled plumbers to provide effective
          solutions for your plumbing problems.
        </p>
        <div className='isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 '>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.color,
                tier.featured ? 'Custom ' : '',
                `rounded-3xl p-8
                )}  xl:p-10 hover:-translate-y-4 duration-150`
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-200',
                  'text-lg font-semibold leading-8   '
                )}
              >
                {tier.name}
              </h3>
              <p
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-200',
                  'mt-4 text-sm leading-6'
                )}
              >
                {tier.description}
              </p>

              <picture>
                <source media='(max-width: 1023px)' srcSet={tier.smallImg} />
                <source media='(min-width: 1024px)' srcSet={tier.img} />
                <img
                  src={tier.img}
                  className='rounded-t-full w-full object-cover pt-4 '
                  alt='service-option'
                />
              </picture>

              <p className='mt-6 flex items-baseline gap-x-1'>
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-4xl font-bold tracking-tight'
                  )}
                ></span>
              </p>
              <Link to='apply-form' smooth={true} duration={500}>
                <p
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'bg-bg text-white hover:bg-ultraViolet focus-visible:outline-bg'
                      : 'bg-bg text-white hover:bg-ultraViolet focus-visible:outline-bg',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer'
                  )}
                >
                  {tier.cta}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
