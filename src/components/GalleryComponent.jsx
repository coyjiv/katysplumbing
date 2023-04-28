/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, memo } from "react";
import { animated, useSpring } from "react-spring";
import { MagnifyingGlassPlusIcon } from "@heroicons/react/20/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Hammer from "hammerjs";
import { galleryImages } from "../constants/gallerySlides";

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [loadingImg, setLoadingImg] = useState(true);

  const spring = useSpring({
    opacity: swipeProgress,
    reset: true,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 160, friction: 24 },
  });


  const handleOpenModal = (index) => {
    if(index === 0){
      setSlideNumber(1);
    }
    else{
      setSlideNumber(index)
    }
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    setLoadingImg(true);
    slideNumber === 1
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    setLoadingImg(true);
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(1)
      : setSlideNumber(slideNumber + 1);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      const hammer = new Hammer(modalRef.current);
      hammer.on("swipeleft", () => {
        // setSwipeProgress(0);
        nextSlide();
      });
      hammer.on("swiperight", () => {
        // setSwipeProgress(0);
        prevSlide();
      });

      return () => {
        hammer.off("swipeleft");
        hammer.off("swiperight");
      };
    }
  }, [modalRef, nextSlide, prevSlide]);

  useEffect(() => {
    setSwipeProgress(1);
  }, [slideNumber]);

  return (
    <section className="bg-[#ebe0bf] py-10">
      <h1 className="text-3xl lg:text-5xl flex justify-center pb-4 lg:pb-5 font-bold text-[#392820] ">
        Our gallery
      </h1>
      <p onClick={()=>handleOpenModal(1)} className="lg:hidden border-b w-fit mx-auto cursor-pointer border-b-black
      hover:scale-110 transition-transform">Click to zoom <MagnifyingGlassPlusIcon width={15} className='inline'/> </p>

      {openModal && (
        <div
          ref={modalRef}
          className="sliderWrap fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="fixed top-6 right-6 w-10 h-10 duration-300 text-white opacity-60 hover:opacity-100  z-50 cursor-pointer"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="fixed  top-1/2 left-6 w-10 h-10 duration-300 transform -translate-y-1/2 text-white opacity-60 hover:opacity-100 z-50 cursor-pointer"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="fixed top-1/2 right-6 w-10 h-10 duration-300  transform -translate-y-1/2 text-white opacity-60 hover:opacity-100 z-50 cursor-pointer"
            onClick={nextSlide}
          />
          <div className="w-full h-full flex items-center justify-center relative">
            <>
              {loadingImg && 
              // spinner div tailwind 
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
              </div>
              }
                <animated.img
                style={spring}
                src={galleryImages[slideNumber].img}
                onLoad={() => {
                  setLoadingImg(false);
                }}
                alt=""
                className={`max-w-full max-h-full select-none -webkit-user-select-none transition-all -ms-user-select-none user-select-none ${loadingImg? 'brightness-50' : 'brightness-100'}`}
              />
            </>
          </div>
        </div>
      )}

      <div className=" galleryWrap bg-[#ebe0bf] py-10 flex flex-wrap gap-10 items-center justify-center max-w-620 mx-auto">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className={`w-56 cursor-pointer  ${
                  index === 0 ? "lg:hidden block w-96  " : ""
                } 
                ${index > 0 ? "hidden  lg:block" : ""}  `}
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={slide.thumbnail}
                  alt=""
                  loading="lazy"
                  className={`max-w-full hover:scale-102 
                  ${index === 0 ? "lg:hidden block " : ""} 
                  ${index > 0 ? "hidden  lg:block" : ""} 
                  `}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

const GalleryComponent = memo(Gallery);
export default GalleryComponent;
