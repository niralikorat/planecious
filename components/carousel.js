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

  },[videoList])

  videoList.includes()
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      // autoPlay={autoPlay}
      autoPlaySpeed={2500}
      centerMode={false}
      className="flex flex-row gap-8"
      containerClass="w-full"
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
          className="flex flex-col bgPodCastCard m-4  h-auto"
        >
          {isYouTubeUrl(video.url) ? (
            <iframe
              src={video.url}
              title={`YouTube video player ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="items-center"
              loading="lazy"
            ></iframe>
          ) : isLinkedInUrl(video.url) ? (
            <iframe
              src={video.url}
              height="600"
              width="400"
              frameborder="0"
              // allowfullscreen=""
              title="Embedded post"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-auto items-center"
              loading="lazy"
            ></iframe>
          ) : null}
          <div className="flex flex-col items-start p-8 gap-4">
            <p className="text-start text-md textThemeColor">{video.category}</p>
            <p className="text-black font-semibold text-lg ">
              {video.heading}
            </p>
            <p className="text-gray-600 text-md">{video.paragraph}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
