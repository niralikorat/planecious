"use client";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const isYouTubeUrl = (url) => url.includes("youtube.com");
const isLinkedInUrl = (url) => url.includes("linkedin.com");

const CarouselComponent = ({ videoList, autoPlay }) => {
  useEffect(()=>{
    console.log(isLinkedInUrl(videoList[0].url))

  },[])

  videoList.includes()
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={autoPlay}
      autoPlaySpeed={2500}
      centerMode={false}
      className="flex flex-row gap-4"
      containerClass="container-with-dots"
      draggable
      focusOnSelect={true}
      infinite
      itemClass="carousel-item-padding-40-px"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      responsive={responsive}
      showDots={false}
      slidesToSlide={1}
      swipeable
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    >
      {videoList.map((video, index) => (
        <div
          key={index}
          className="flex flex-col bgPodCastCard m-4 w-auto h-[480px]"
        >
          {isYouTubeUrl(video.url) ? (
            <iframe
              src={video.url}
              title={`YouTube video player ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-auto items-center"
              loading="lazy"
            ></iframe>
          ) : isLinkedInUrl(video.url) ? (
   
            <p>hello</p>
          ) : <p className="text-white">bye</p>}
          <div className="flex flex-col items-start p-4 gap-4">
            <p className="text-start textThemeColor">{video.category}</p>
            <p className="text-black font-semibold text-md max-w-xs">
              {video.heading}
            </p>
            <p className="text-gray-600 text-sm">{video.paragraph}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
