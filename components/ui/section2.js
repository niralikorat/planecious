"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useRef } from "react";
import CarouselComponent from "../carousel";

export default function Section2() {
  const section2Data = [
    {
      imgUrl: "aboutIcon/Icons-01.png",
      title: "People",
      detail: "Assum aperiris his eam mea",
      button: "",
    },
    {
      imgUrl: "aboutIcon/Icons-02.png",
      title: "Planet",
      detail: "Assum aperiris his eam mea",
      button: "",
    },
    {
      imgUrl: "aboutIcon/Icons-04.png",
      title: "Community",
      detail: "Assum aperoros his eam mea",
      button: "",
    },
    {
      imgUrl: "aboutIcon/Icons-03.png",
      title: "Sustainability",
      detail: "Assum aperiris his eam mea",
      button: "",
    },
  ];

  const videoData = [
    {
      url: "https://www.youtube.com/embed/6Reaa3gH9dc?si=v6TY2XDLDwBxLm9Z",
      category: "SUSTAINABILITY",
      heading: "Sustainability and DEI Expert",
      paragraph:
        "Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.",
    },
    {
      url: "https://www.youtube.com/embed/WJUo697afdc?si=SkfYiIbJXx6KaTw3",
      category: "NATURE",
      heading: "ESG Reporting & Rating Consultant",
      paragraph:
        "Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.",
    },
    {
      url: "https://www.youtube.com/embed/PatHQFStlZI?si=3PY9bvDe4ghwlx0J",
      category: "CARBON",
      heading: "Introducing Planecious",
      paragraph:
        "Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.",
    },
  ];
  const animatedRefs = useRef([]); // Array of refs

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aboutSecIcons");
            observer.unobserve(entry.target); // Stop observing after animation is triggered
          }
        });
      },
      { threshold: 0.01 } // Trigger when 10% of the element is visible
    );

    animatedRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      animatedRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const communityPosts = [
    {
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7226182797361606657",
      category: "COMMUNITY",
      heading: "Volunteer in Our Community",
      paragraph: "Join our community and make a difference!",
    },
  ];

  return (
    <div className="flex flex-col items-center">
    <img src="https://planeciousleaders.org/images/planecious-1.jpg" className="w-full"/>
    <img src="https://planeciousleaders.org/images/planecious-2.jpg" className="w-full"/>
    <img src="https://planeciousleaders.org/images/planecious-3.jpg" className="w-full"/>
      {/* <div
        className="section2 py-24 px-4 md:px-12 flex flex-col text-black bg-opacity-50"
        id="about"
      >
        <div className="flex flex-col gap-8 justify-center items-center">
          <p className="example text-md text-center p-4 -rotate-12">ABOUT US</p>
          <p className="max-w-2xl text-center text-sm">
            We represent a community of optimists who strive to make a
            difference. Planecious turns everyday environmental action and
            influencing into effortless ventures. Our initiative makes living
            more sustainably easier, enabling any person to create an impact and
            build towards the future the planet deserves.
          </p>
          <p className="text-5xl font-semibold text-center text-[#37ACC5]">
            An Initiative For Change By Aligning
          </p>
        </div>
        <div className="flex flex-wrap gap-16 lg:gap-20 xl:gap-28 justify-center items-center ">
          {section2Data.map((data, index) => (
            <div
              key={index}
              className={`${
                index % 2 !== 0 && "md:mt-40"
              } mt-12 flex flex-col justify-center items-center gap-4 animated-box`}
              ref={(el) => (animatedRefs.current[index] = el)}
            >
              <img src={data.imgUrl} className="w-[120px]" alt={data.title} />
              <p>{data.title}</p>
           
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="flex flex-col md:flex-row">
        <div className="flex flex-row items-center bgPrimary w-full lg:w-2/5">
          <div className="flex flex-col text-white justify-center items-start gap-4 px-10 lg:px-20 py-32 ">
            <p className="example -rotate-6 text-md">E-book</p>
            <p className=" text-3xl lg:text-4xl font-semibold ">
              A Guide to Sustainable Marketing in 2024
            </p>
            <Link
              className="bg-white px-4 py-3 lg:px-8 lg:py-4 rounded-3xl text-xs lg:text-sm font-semibold text-black mt-2 hover:scale-105"
              href={"ebook.pdf"}
              target="_blank"
            >
              READ NOW
            </Link>
          </div>
          <div className="triangle-right"></div>
        </div>
        <img src={"/ebookBanner.jpg"} className="w-full lg:w-3/5" alt="img" />
      </div> */}

      <div
        className="flex flex-col md:flex-row bgPodcast p-4 md:px-20 py-20  gap-10"
        id="walkTheTalk"
      >
        <div className="flex flex-col gap-4 items-center justify-center  ">
          {/* <p className="example -rotate-6 text-md">Latest</p> */}
          <p className="font-semibold text-5xl md:text-7xl textPrimary">Walk The Talk</p>
          {/* <p className="max-w-md text-center">
            Discover people changing the face of our planet for good. <br></br>Tune in
            and listen to their sure-to-inspire stories.
          </p>
          */}
        </div>
        {/* <CarouselComponent videoList={videoData} autoPlay={true} /> */}
<div className="flex justify-center items-center">
        
        </div>
       
      </div>
<div className="flex flex-wrap justify-center gap-8 ">
<iframe className="w-full md:w-2/5 h-full sm:h-[340px] xl:h-[400px]" src="https://www.youtube.com/embed/-EAfiPdMoTY?si=AHJoUbrg2FrtdqYL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className="w-full md:w-2/5 h-full sm:h-[340px] xl:h-[400px]" src="https://www.youtube.com/embed/THWwSB6GnFE?si=nbqkNnnndHRuS009" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className="w-full md:w-2/5 h-full sm:h-[340px] xl:h-[400px]" src="https://www.youtube.com/embed/Cl4W9d1xpNs?si=zaKGD7GZ0C_YiWDj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className="w-full md:w-2/5 h-full sm:h-[340px] xl:h-[400px]" src="https://www.youtube.com/embed/Cl4W9d1xpNs?si=Zq8nbqqEgAToUdxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className="w-full md:w-2/5 h-full sm:h-[340px] xl:h-[400px]" src="https://www.youtube.com/embed/6Reaa3gH9dc?si=iYS_3E-46EwJA99v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe className="w-full md:w-2/5 h-full sm:h-[340px] xl:h-[400px]" src="https://www.youtube.com/embed/WJUo697afdc?si=VIMuJ2jFlwfJCwbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div className="flex items-center justify-center py-12">
 <Link href={'https://www.youtube.com/@PlaneciousLeaders'} target="_blank"  rel="noopener noreferrer" className='bgPrimary px-6 py-3 rounded-3xl text-sm font-semibold text-white mt-2 hover:scale-105 '>View More</Link>
 </div>
   
      {/* <div
        className="bgSection3 flex flex-col py-32 md:px-20 gap-4 items-center text-white"
        id="JoinUs"
      >
        <p className="example -rotate-6 text-md">COMMUNITY</p>
        <p className="font-semibold text-4xl text-white  text-center">
          Action and Change starts from here,<br></br>
          Be a part of Planecious.
        </p>
     
        <Link
          className="bgPrimary px-6 py-4 rounded-3xl text-xs font-semibold text-white mt-2 hover:scale-105"
          href={"https://www.linkedin.com/groups/8147680/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN HERE
        </Link>
      </div> */}
      {/* <section
        className="flex flex-col lg:flex-row justify-evenly h-full lg:h-[70vh]"
        id="Initiatives"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-4 py-10 px-10 lg:px-20 justify-center h-full ">
            <p className="font-semibold text-4xl text-black   text-center">
            Our Other Initiatives
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-screen lg:w-auto lg:h-[46vh]">
            <img src="dekoratus.jpg" className="w-full lg:w-1/2" />
            <div className="flex flex-col gap-4 justify-center items-start bgSection3card px-10 lg:px-20 py-20 lg:py-8 w-full lg:w-1/2 ">
              <p className="font-semibold text-2xl 2xl:text-3xl text-black  text-start gradientText max-w-md">
                A healthier planet, happier people,Our mission in action.
              </p>
              <Link
                className="underline text-sm"
                href={"https://dekoratus.com/"}
                target="_blank"
              >
                DEKORATUS
              </Link>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col  h-[70vh]">
          <img src="/graciaBanner.jpg" className="h-1/2 " />
          <div className="flex flex-col gap-16 justify-center items-start  py-10  px-10 lg:px-20 bg-orange-400 h-1/2">
            <p className="font-semibold text-2xl 2xl:text-3xl text-white  max-w-lg text-start">
              An initiative to empower brands purposefully.
            </p>
            <div className="flex flex-col gap-2 text-white">
     
              <Link
                href={"https://graciamarcom.com/"}
                 target="_blank"
                className="text-md underline"
              >
                GRACIA MARCOM
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
