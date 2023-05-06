import { animated, useSpring, useTrail } from "react-spring";
import Image from "next/image";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
    Very pleased with Katys Plumbing Service I called needing service, and the lady that answered the phone was able to assure me that they could help.I was able to get a same day appointment with a time frame that worked for me.  The tech notfied me when he was 30 mins out . The tech was very professional and informative. Pricing and warranty was explained to me which I though was a very good deal. He diagnose the issue and fix the problem quickly.  Very respectful of my home and left the area clean.  I would definitely recommend and will be my plumbing company for now on.
    `,
    author: "Joshua Patel",
    avatarSrc: "/img/reviews/1.jpg",
  },
  {
    id: 2,
    rating: 5,
    content: `
    I had mold in my daughter bathroom which we removed everything. The walls ceramics bath tub shower everything got treated  . Then   I had to remodel I had a contractor who did the job and recommended me Katys Plumbing Service pluming as a very onset plumber with decent prices who will get the work done asap .  I call the office I schedule for the next day the work started 2 days after as of my request early in the morning and the crew didn’t leave till the work was completed .. I wanted to thank Charlie the owner and his professional crew for leaving my house that day with minimum dust
    `,

    author: `Mason Scott`,
    avatarSrc: "/img/reviews/2.jpg",
  },

  {
    id: 3,
    rating: 5,
    content: `
    Old valve was leaking past the valve and needed replacement before I did the dishwasher.  I called Katys Plumbing Service and they took care of it within 2 hrs.  Cost was reasonable too, guys were polite.  What else can you ask for?
    `,

    author: `Isabella Garcia`,
    avatarSrc: "/img/reviews/3.jpg",
  },

  {
    id: 4,
    rating: 5,
    content: `
    Working with Katys Plumbing Service was great. They were on time, responsive and very helpful. In my particular case the City of Houston needed to be involved and Katys Plumbing Service helped facilitate getting the city to react in the quickest manner possible. I would absolutely use Katys Plumbing Service in the future for any plumbing needs.
    `,

    author: `Emily Nguyen`,
    avatarSrc: "/img/reviews/4.jpg",
  },
  {
    id: 5,
    rating: 5,
    content: `
    Katys Plumbing Service was great. Came at night because we had a leak in the upstairs bathroom. He came quickly, diagnosed the problem and fixed it quickly. He was also careful to keep things clean while walking  around the house and was very reasonable. I would highly recommend Katys Plumbing Service.
    `,
    author: `Ethan Johnson`,
    avatarSrc: "/img/reviews/5.jpg",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-ultraViolet pt-20 pb-40 min-h-[1000px] lg:min-h-[800px] shadow-2xl"
    >
      <h1 className="text-center text-white lg:text-5xl text-3xl font-bold border-b-ultraViolet mb-12">
        Client Reviews
      </h1>

      <div className="review lg:mx-16 mx-5">
        <h2 className="sr-only">Client Reviews</h2>
        <ReviewController reviews={reviews} />
      </div>
    </section>
  );
}

const Review = ({ review }) => {
  const [animateStars, setAnimateStars] = useState(false);

  const starProps = useTrail(5, {
    from: {
      opacity: 0,
      transform: "scale(0.5) rotate(-30deg)",
    },
    to: {
      opacity: 1,
      transform: "scale(1) rotate(0deg)",
    },
    config: {
      mass: 1,
      tension: 400,
      friction: 30,
    },
    delay: 100,
  });

  const animatedContentOpacity = useSpring({
    from: { opacity: 0, transform: "translateY(-5px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: {
      duration: 300,
      friction: 10,
    },
  });
  const animatedAvatarOpacity = useSpring({
    from: { opacity: 0, transform: "translateY(5px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: {
      duration: 300,
    },
  });
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      setTime(0);
    }
  }, [review]);

  const animate = () =>
    requestAnimationFrame(() => {
      setTime(time + 1 / 5);
    });

  useEffect(() => {
    animate();
  }, [time]);

  return (
    <>
      <section className="absolute  shadow-2xl px-6 py-10 lg:max-w-2xl left-1/2 -translate-x-1/2 w-full lg:w-[60%]  rounded-xl bg-brightViolet">
        <figure className="mx-auto   max-w-2xl">
          <p className="sr-only">5 out of 5 stars</p>
          <animated.div className="flex gap-x-1 text-indigo-600">
            {starProps.map((props, index) => (
              <animated.svg
                key={index}
                style={props}
                class="star h-5 w-5 flex-none"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.591l-4.069 2.485c-.714.436-1.599-.207-1.405-1.02l1.106-4.637-3.62-3.102c-.633-.543-.296-1.583.536-1.65l4.752-.382 1.831-4.401c.321-.772 1.415-.772 1.736 0l1.83 4.401 4.753.381c.833.067 1.171 1.107.536 1.651l-3.62 3.102 1.106 4.637c.194.813-.691 1.456-1.405 1.02L10 15.591z" />
              </animated.svg>
            ))}
          </animated.div>
          <animated.blockquote
            className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9"
            style={animatedContentOpacity}
          >
            <p className="font-normal line-clamp-6">“{review.content}”</p>
          </animated.blockquote>
          <animated.figcaption
            className="mt-10 flex  items-center gap-x-4"
            style={animatedAvatarOpacity}
          >
            <Image
              width={100}
              height={100}
              className="h-12 w-12  mx-0 rounded-full bg-gray-50"
              src={review.avatarSrc}
              alt=""
            />
            <div className="text-sm  leading-6">
              <div className="font-medium  text-gray-900 text-2xl">
                {review.author}
              </div>
            </div>
          </animated.figcaption>
        </figure>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full h-1 w-[95%] bg-white/20">
          <div
            className="absolute shadow-2xl drop-shadow-xl shadow-white bottom-0 left-0 rounded-full h-1 z-20 bg-white full-anim"
            style={{ width: `${time > 100 ? 100 : time}%` }}
          ></div>
        </div>
      </section>
    </>
  );
};

const ReviewController = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const animation = useSpring({
    to: { opacity: animate ? 1 : 0 },
    config: { duration: 200 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      if (index < reviews.length - 1) {
        setIndex((index + 1) % reviews.length);
      } else {
        setIndex(0);
      }
      setTimeout(() => {
        setAnimate(false);
      }, 4000);
    }, 4300);

    return () => clearInterval(interval);
  }, [index, reviews.length]);

  return (
    <animated.div className="relative" style={animation}>
      <Review key={reviews[index].id} review={reviews[index]} />
    </animated.div>
  );
};
