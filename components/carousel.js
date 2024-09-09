"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CarouselComponent = ({ videoList, autoPlay }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={autoPlay}
      autoPlaySpeed={2500}
      centerMode={false} // Set to false to improve mobile layout
      className="w-full"
      containerClass="w-full"
      draggable
      focusOnSelect={true}
      infinite
      itemClass="px-2 md:px-4" // Adjust padding for responsiveness
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      responsive={responsive}
      showDots={false}
      ssr={true}
      slidesToSlide={1}
      swipeable
      removeArrowOnDeviceType={["tablet", "mobile",'desktop']}
    >
      {videoList.map((video, index) => (
        <div
          key={index}
          className="flex flex-col bg-white w-full m-2 md:m-4"
        >
          <div className="aspect-w-16 aspect-h-9 w-full"> {/* Ensures responsive video container */}
            <iframe
              src={video.url}
              title={`YouTube video player ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[214px] w-full"
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col items-start py-4 gap-1">
            <p className="text-start text-sm textThemeColor">{video.category}</p>
            <p className="text-black font-semibold text-md">
              {video.heading}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
