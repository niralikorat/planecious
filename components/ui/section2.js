'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CarouselComponent from '../carousel';

export default function Section2() {
  const section2Data = [
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-1.png', title: 'Seals', detail: 'Assum aperiris his eam mea', button: '' },
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-2.png', title: 'Owls', detail: 'Assum aperiris his eam mea', button: '' },
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-3.png', title: 'Penguins', detail: 'Assum aperoros his eam mea', button: '' },
    { imgUrl: 'https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-icon-1.png', title: 'Seals', detail: 'Assum aperiris his eam mea', button: '' }
  ];

  const videoData = [
    {
      url: 'https://www.youtube.com/embed/6Reaa3gH9dc?si=v6TY2XDLDwBxLm9Z',
      category: 'SUSTAINABILITY',
      heading: 'Sustainability and DEI Expert',
      paragraph: 'Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.',
    },
    {
      url: 'https://www.youtube.com/embed/WJUo697afdc?si=SkfYiIbJXx6KaTw3',
      category: 'NATURE',
      heading: 'ESG Reporting & Rating Consultant',
      paragraph: 'Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.',
    },
    {
      url: 'https://www.youtube.com/embed/PatHQFStlZI?si=3PY9bvDe4ghwlx0J',
      category: 'CARBON',
      heading: 'Introducing Planecious',
      paragraph: 'Welcome to Planecious, the ultimate platform for individuals passionate about combating climate change and building a sustainable future.',
    },
  ];

  const communityPosts = [
    {
      url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7226182797361606657',
      category: 'COMMUNITY',
      heading: 'Volunteer in Our Community',
      paragraph: 'Join our community and make a difference!',
    }
  ];

  return (
    <div className='flex flex-col'>
      <div className='section2 py-24 px-4 md:px-12 flex flex-col text-white'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <p className='example text-xs text-center p-4 -rotate-12'>OUR MISSION</p>
          <p className='text-4xl font-bold text-center'>Saving Endangered Species is Crucial</p>
          <p>Lorem ipsum dolor sit amet, in audire fabulas cotidieque eos.</p>
        </div>
        <div className='flex flex-wrap gap-16 lg:gap-20 xl:gap-28 justify-center items-center '>
          {section2Data.map((data, index) => (
            <div key={index} className={`${index % 2 !== 0 && 'md:mt-40'} mt-12 flex flex-col justify-center items-center gap-4`}>
              <img src={data.imgUrl} className='w-[120px]' alt={data.title} />
              <p>{data.title}</p>
              <p>{data.detail}</p>
              <Link className='underline' href={'/'}>TAKE ACTION</Link>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-row items-center bgPrimary w-full lg:w-2/5'>
          <div className='flex flex-col text-white justify-center items-start gap-4 px-10 lg:px-20 py-32 '>
            <p className='example -rotate-6'>WHALE LOVE</p>
            <p className='text-4xl font-semibold '>New Research Reveals That Whales and Dolphins Have a Rich Social Life</p>
            <button className='bg-white px-10 py-4 rounded-3xl text-sm font-semibold text-black mt-2'>VIEW MORE</button>
          </div>
          <div className='triangle-right'></div>
        </div>
        <img src={'/sec3img.jpg'} className='w-full lg:w-3/5' alt='img' />
      </div>

      <div className='flex flex-col md:flex-row bgPodcast p-4 md:px-20 py-32 justify-between gap-20'>
        <div className='flex flex-col gap-4 items-start justify-center w-full '>
          <p className='example -rotate-6'>funds</p>
          <p className='font-semibold text-4xl text-black'>Help & Donate</p>
          <p className='max-w-md'>Vim audire labores insolens ut. Iisque imperdiet sea at, ea est porro appart.</p>
          <button className='bgPrimary px-10 py-4 rounded-3xl text-sm font-semibold text-white mt-2'>VIEW MORE</button>
        </div>
        <CarouselComponent videoList={videoData} autoPlay={true} />
      </div>

      <div className='bgSection3 flex flex-col py-32 md:px-20 gap-4 items-center text-white'>
        <p className='example -rotate-6'>COMMUNITY</p>
        <p className='font-semibold text-4xl text-white max-w-sm text-center'>Become a Volunteer in Our Community</p>
        {/* <CarouselComponent videoList={communityPosts} autoPlay={true} /> */}
        <button className='bgPrimary px-10 py-4 rounded-3xl text-sm font-semibold text-white mt-2'>JOIN COMMUNITY</button>
      </div>
      <section className='flex flex-col lg:flex-row justify-evenly h-full lg:h-[70vh]'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col gap-4 py-10 px-10 lg:px-20 items-start h-full lg:h-[24vh]'>
          <p className='font-semibold text-3xl text-black max-w-md  text-start'>Key to a More Eco-friendly world in 2022</p>
          <Link className='underline' href={'/'}>TAKE ACTION</Link>
          </div>
          <div className='flex flex-col lg:flex-row w-screen lg:w-auto lg:h-[46vh]'>
          <img src='https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-masonry-img-2.jpg' className='w-full lg:w-1/2'/>
          <div className='flex flex-col gap-4 justify-center items-start bgSection3card px-10 lg:px-20 py-20 lg:py-8 w-full lg:w-1/2 '>
          <p className='font-semibold text-2xl xl:text-3xl text-black  text-start gradientText max-w-md'>The polar bear is the largest bear species, and the largest land carnivore </p>
          <Link className='underline' href={'/'}>TAKE ACTION</Link>
          </div>
          </div>
       
        </div>

        {/* <div className='flex flex-col w-auto '>
          <div className='flex flex-col gap-4 bg-white h-auto'>
  
          </div>
        

        </div> */}
        <div className='flex flex-col  h-[70vh]'>
          <img src='https://earthcare.qodeinteractive.com/wp-content/uploads/2022/06/main-home-masonry-img-1.jpg' className='h-1/2'/>
          <div className='flex flex-col gap-16 justify-center items-start  py-10  px-12  bg-orange-400 h-1/2'>
          <p className='font-semibold text-xl 2xl:text-2xl text-white  max-w-lg text-start'>Key to a More Eco-friendly world in 2022</p>
          <div className='flex flex-col gap-2 text-white'>
            <p className='example'>Abhishek Raj</p>
            <p className='text-md'>ENGINEER, GRACIA MARCOM</p>
          </div>
      
          </div>
        </div>
      </section>
    </div>
  );
}
