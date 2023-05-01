import {animated, useSpring} from 'react-spring'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      During the past year that Remsvol has been completing renovations at our community we have been overly pleased at the communication and thorough work that has been delivered. Remsvol would be a tremendous asset to any organization needing renovations and they have the best prices in the market, we could not be more pleased to work with this company.
    `,
    author: "The Willows Ashley Park",
    avatarSrc: "/img/willows-logo.jpeg",
  },
  {
    id: 2,
    rating: 5,
    content: `
      Our team was happy to work with Remsvol LLC on exterior paining project of entire apartment complex in Charlotte, NC. As the owner of the company, I know what a reliable general contractor means. And the qualities that a contractor must possess can be found in the operations of Remsvol. The management of Remsvol LLC showed their professionalism and loyalty to our company.
    `,

    author: `Javier's Painting`,
    avatarSrc: "/img/javiers-painting-logo.png",
  },

  {
    id: 3,
    rating: 5,
    content: `
      I would like to commend Remsvol LLC for an outstanding job on Preserve at Port
      Royal renovation project. In my experience, Remsvol has proven to be an excellent
      professional who eager to show the best quality of their work. We will continue to work with Remsvol on upcoming Complex Renovation projects.
    `,

    author: `Preserve Port Royal`,
    avatarSrc: "/img/preserve-logo.jpg",
  },

  {
    id: 4,
    rating: 5,
    content: `
      I have had the opportunity to work with Remsvol from 2022. Remsvol LLC has managed these
      works in the manner that allowed them to be completed on or ahead the schedule while
      maintaining the excellent relationship with the client, employer and our construction teams on
      site. On-site coordination was handled very professionally, and all the required paperwork and
      queries were responded to promptly.
    `,

    author: `DM Construction`,
    avatarSrc: "/img/dm-construction-logo.jpg",
  },
];


export default function Reviews() {
  return (
    <section id="reviews" className="bg-ultraViolet pt-20 pb-40 min-h-[1000px] lg:min-h-[800px] shadow-2xl">
      <h1 className="text-center text-white lg:text-5xl text-3xl font-bold border-b-ultraViolet mb-12">
        Client Reviews
      </h1>

      <div className="review lg:mx-16 mx-5">
        <h2 className="sr-only">Client Reviews</h2>
    <ReviewController reviews={reviews}/>
      </div>
    </section>
  );
}


const Review = ({ review }) => {
  const animatedRatingOpacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 250,
    },
  });
  const animatedContentOpacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
    },
  });
  const animatedAvatarOpacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 750,
    },
  });
  const [time, setTime] = useState(0);

  useEffect(()=>{
    if(time > 0){
      setTime(0)
    }
  }, [review])

  const animate = () => requestAnimationFrame(()=>{
    setTime(time + 1/5)
  })

  useEffect(()=>{
    animate()
  }, [time])


  return <>
    <section class="absolute shadow-2xl px-6 py-10 lg:max-w-2xl left-1/2 -translate-x-1/2 w-full lg:w-[60%]  rounded-xl bg-brightViolet">
    <figure class="mx-auto max-w-2xl">
      <p class="sr-only">5 out of 5 stars</p>
      <animated.div class="flex gap-x-1 text-indigo-600" style={animatedRatingOpacity}>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
        <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
        </svg>
      </animated.div>
      <animated.blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9" style={animatedContentOpacity}>
        <p>“{review.content}”</p>
      </animated.blockquote>
      <animated.figcaption class="mt-10 flex items-center gap-x-6" style={animatedAvatarOpacity}>
        <Image width={10} height={10} class="h-12 w-12 mx-0 rounded-full bg-gray-50" src={review.avatarSrc} alt=""/>
        <div class="text-sm leading-6">
          <div class="font-semibold text-gray-900">{review.author}</div>
          <div class="mt-0.5 text-gray-600">CEO of Workcation</div>
        </div>
      </animated.figcaption>
    </figure>
    <div className='absolute -bottom-3 left-0 rounded-full h-2 w-full bg-white/20'>
    <div className='absolute bottom-0 left-0 rounded-full h-2 z-20 bg-white full-anim' style={{width: `${time>100? 100 : time}%`}} ></div>
    </div>
  </section>
 </>
  }


  const ReviewController = ({reviews}) => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const animation = useSpring({
      to: { opacity: animate ? 1 : 0 },
      config: { duration: 200 },
    });

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //      setAnimate(true);
    //     if(index < reviews.length - 1){
    //       setIndex((index + 1) % reviews.length);
    //     }
    //     else{
    //       setIndex(0);
    //     }
    //     setTimeout(() => {
    //       setAnimate(false);
    //     }, 4000);
    //   }, 4300);
  
    //   return () => clearInterval(interval);
    // }, [index, reviews.length]);


    useEffect(() => {
      const interval = setInterval(() => {
         setAnimate(true);
        if(index < reviews.length - 1){
          setIndex((index + 1) % reviews.length);
        }
        else{
          setIndex(0);
        }
        setTimeout(() => {
          setAnimate(false);
        }, 4000);
      }, 4300);
  
      return () => clearInterval(interval);
    }, [index, reviews.length]);

    return <animated.div className='relative' style={animation}><Review review={reviews[index]} /></animated.div>
  }